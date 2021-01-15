import App from "./express/App";


//entry point class
export default class Main {

  private _app

  constructor() {
    this._app = new App()

    this.init()
  }

  private init() {
    this._app.startApp()
  }
}

const entryPoint = new Main()