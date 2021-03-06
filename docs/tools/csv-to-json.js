var config = {
  header_count: 1, // header count
  field_header_index: 0, // Which row is the field name source
  parsing_number: true, // Parse number
  parsing_boolean: true, // Parse boolean
  parsing_array: true, // Parse array
  csv_path: './docs/csv',
  output_path: './app/src/renderer/assets/config'
};

function csvToJSON(csv) {

  var lines = csv.split("\r\n");
  var result = [];
  var headers = lines[config.field_header_index].split(",");

  for (var i = config.header_count; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    // Ignore empty id
    if (currentline[0] === '' || currentline[1] === '') {
      continue;
    }

    for (var j = 0; j < headers.length; j++) {

      // Ignore empty field
      // headers[j] = headers[j].replace('\r', '');
      if (headers[j] === '') {
        continue;
      }

      var value = currentline[j];

      // Parse number
      if (config.parsing_number && /^-{0,1}\d*\.{0,1}\d+$/.test(currentline[j])) {
        value = Number(currentline[j]);
      }

      // Parse boolean
      if (config.parsing_boolean && (currentline[j].toLowerCase() === 'true' || currentline[j].toLowerCase() === 'false')) {
        value = Boolean(currentline[j]);
      }

      // Parse array
      if (config.parsing_array && /\[([\d+];?)+\d\]/.test(currentline[j])) {
        var strArray = currentline[j].replace('[', '').replace(']', '');
        var array = strArray.split(';').map(Number);

        value = array;
      }

      obj[headers[j]] = value;
    }

    result.push(obj);
  }

  return JSON.stringify(result, null, 2);
}

const fs = require('fs');
fs.readdir(config.csv_path, (err, files) => {
  files.forEach(file => {

    // Read CSV
    var csv = fs.readFileSync(config.csv_path + '/' + file, 'utf8');
    var json = csvToJSON(csv);

    // Get configuration name
    var matches = /.*\((.*)\)/.exec(file);
    var configFilename = config.output_path + '/' + matches[1] + '.json';


    console.log("Converting '%s' to '%s' ...", file, configFilename);

    fs.writeFileSync(configFilename, json, 'utf8');
  });

  console.log("Convert finished.");
});