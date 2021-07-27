const { app } = require('electron');
const AutoLaunch = require('auto-launch');
const functions = require('./functions');

// 시작프로그램으로 설정하기. set autolaunch
// const autoLaunch = new AutoLaunch({
//   name: 'Wall Paper',
//   path: app.getPath('exe'),
// });

// autoLaunch.isEnabled().then((isEnabled) => {
//   if (!isEnabled) {
//     autoLaunch.enable();
//   }
// });

// entrance point
app.whenReady().then(functions.newWindow);

app.on('window-all-closed', () => {
  app.quit();
});
