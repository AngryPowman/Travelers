var messenger = require('messenger');
var program = require('commander');

client = messenger.createSpeaker(8000);

program
  .version('0.0.1')
  .option('-i, --add-item <n>', 'Add items', parseInt)
  .option('-c, --count <n>', '')
  .option('-c, --collect [value]', 'A repeatable value', collect, [])

.parse(process.argv);

console.log(' collect: %j', program.collect);

// if (program.addItem) {
//   var count =
//     console.log("Add item: [%d] x %d", program.addItem, program.count)
// }

process.exit()