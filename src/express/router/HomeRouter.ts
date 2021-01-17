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
            res.status(200).send(JSON.stringify({error_code: 200, error_message: `hello! your path is ${req.originalUrl}`}, null, 2))
        })
    }

}

export = new HomeRouter()._router