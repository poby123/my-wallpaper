const { BrowserWindow, screen } = require('electron');
const path = require('path');

class ElectronFunctions {
  newWindow = () => {
    const mainScreen = screen.getPrimaryDisplay();
    const dimensions = mainScreen.size;

    let win = new BrowserWindow({
      width: dimensions.width - 5,
      height: dimensions.height,
      frame: false,
      transparent: true,
      resizable: false,
      webPreferences: {
        show: false,
        enableRemoteModule: true,
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    win.setIgnoreMouseEvents(true);
    win.loadFile(`${path.join(__dirname, './index.html')}`);

    win.once('ready-to-show', () => win.show());
    win.on('closed', () => {
      win = null;
    });
  };
}

module.exports = new ElectronFunctions();
