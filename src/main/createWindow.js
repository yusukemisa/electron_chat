import { BrowserWindow } from "electron";

let win;

// default指定で{}なしimportで使える
export default function createWindow() {
  win = new BrowserWindow();
  win.loadURL(`file://${__dirname}/../../index.html`);
  win.on("close", () => {
    win = null;
  });
}
