import { BrowserWindow, app } from 'electron'

export default class Electron {

  private _app
  private electronWindow: any = null
  private _config: any
  constructor() {
    this._app = app
    this._config = {}

    this.init()
  }

  public init(): void {
    this.setAppStates()
  }

  private setAppStates(): void {
    this._app.on('ready', this.startWindow)
  }

  private startWindow(): void {
    this.electronWindow = new BrowserWindow()
    this.electronWindow.loadURL('http://localhost:5000')
    
    //browser event
    this.electronWindow.on('close', () => this.closeWindow)
  }
  
  private closeWindow(){
    this.electronWindow = null
  }


}