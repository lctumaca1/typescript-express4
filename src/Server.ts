import express from 'express'

export default class Server {

    public _port!: any
    public _app!: express.Application

    constructor(app: express.Application) {
        this._port = process.env.PORT || 12000
        this._app = app

        this.createServer()
    }

    public createServer() {
        this._app.listen(this._port, () => {
            console.log(`Server is listening on port: ${this._port}`)
        })
    }
}