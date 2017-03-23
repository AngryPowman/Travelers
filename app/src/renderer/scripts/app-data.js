import fs from 'fs';
import Electron from 'electron';

class AppData {
  static appDataPath;
  static init() {
    // Create app data directory
    // /Users/<Username>/Library/Application Support
    var app = Electron.remote.app;

    if (process.env.NODE_ENV === 'development') {
      this.appDataPath = app.getPath('appData') + '/Travelers';
    } else {
      this.appDataPath = app.getPath('appData') + '/' + app.getName();
    }
  }

  static getAppDataPath() {
    return this.appDataPath;
  }
}

export default AppData;