import express, { Router, Request, Response, NextFunction } from 'express'
import HomeController from '../controller/HomeController'

class HomeRouter {
    public _router: express.Router
    private _controller: HomeController

    constructor() {
        this._router = Router()
        this._controller = new HomeController()

        this._configure()
    }

    private _configure():void {
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.send('home')
        })
    }

}

export = new HomeRouter()._router