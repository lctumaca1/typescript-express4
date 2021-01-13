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
            res.render('index')
        })

        this._router.post('/', (req: Request, res: Response, next: NextFunction) => {
            res.send('test')
        })
        
    }

}

export = new TestRouter()._router