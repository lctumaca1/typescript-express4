import DBManager from './DBManager'

class TestModel extends DBManager {

    constructor() {
        super()

        console.log(this.db_connection)
    }
}