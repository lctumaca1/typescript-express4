import { Router } from 'express'
import HomeRouter from './HomeRouter'
import TestRouter from './TestRouter'

class MasterRouter {
    public _router: Router = Router()

    private _homeRouter = HomeRouter
    private _testRouter = TestRouter

    constructor() {
        this._configure()
    }

    private _configure(): void {
        this._router.use('/', this._homeRouter)
        this._router.use('/test', this._testRouter)

        // this._router.use((req, res, next) => {
        //     // res.status(400).render('index')
        // })
    }

    
}

export = new MasterRouter()._router