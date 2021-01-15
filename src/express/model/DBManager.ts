import mysql from 'mysql'

export default class DBManager {
    protected db_connection: any

    constructor() {
        this.db_connection = mysql.createConnection({
            host:       '',
            user:       '',
            password:   '',
            database:   ''
        })
    }
}