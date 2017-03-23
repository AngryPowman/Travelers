import fs from 'fs';
import AppData from 'scripts/app-data';
import Player from 'scripts/player';

class Archive {

  static save() {
    // save to disk or save on the server
    var ArchiveFilePath = AppData.getAppDataPath() + '/save.dat';

    fs.writeFile(ArchiveFilePath, JSON.stringify(Player.data), 'utf8', (err) => {
      if (err) {
        console.log("Save archive failed: %o", err);
      } else {
        console.log("Save archive success.");
      }
    });
  }

  static load() {
    var ArchiveFilePath = AppData.getAppDataPath() + '/save.dat';
    if (fs.existsSync(ArchiveFilePath)) {
      var json = fs.readFileSync(ArchiveFilePath, "r")
      if (json) {
        Player.data = JSON.parse(json);
        console.log("Loaded archive success: %o", Player.data);
      } else {
        console.log("Archive file empty.")
      }
    } else {
      console.log("Archive file not exists, init archive file to start new game.");
      this.initArchiveFile();
    }

    // console.log(new Buffer("Hello World").toString('base64'));
  }

  static initArchiveFile() {
    // Init save data ...
    Player.data.role.hp = 300;
    this.save();
  }

}

export default Archive;