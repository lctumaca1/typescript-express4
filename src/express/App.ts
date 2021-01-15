import express, {Request, Response, NextFunction} from 'express'
import path from 'path'

import MasterRouter from './router/MasterRouter'
import Server from './Server'

export default class App {

    public app: express.Application
    public server: Server

    constructor() {
        this.app = express()
        this.server = new Server(this.app)
    }

    private setRouter(): void {
        this.app.use('/', MasterRouter)
    }

    private setViewEngine(): void {
        this.app.set('views', path.join(__dirname, 'views'))
        this.app.set('view engine', 'ejs')
        // this.app.use(express.static( path.join(__dirname, 'public') ));
    }

    private setMiddleware(): void {

    }

    public startApp(): void {
        this.setViewEngine()
        this.setRouter()
    }

}
