import express, { Request, Response, NextFunction } from 'express'
import TestController from '../controller/TestController'

class TestRouter {
    public _router: express.Router
    private _controller: TestController

    constructor() {
        this._router = express.Router()
        this._controller = new TestController()
              
        this._configure()
    }

    private _configure(): void {
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.status(200).send(JSON.stringify({error_code: 200, error_message: `hello! your path is ${req.originalUrl}`}, null, 2))
        })
        
    }

}

export = new TestRouter()._router