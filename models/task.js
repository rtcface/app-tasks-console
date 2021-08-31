const { v4: uuidv4 } = require('uuid');
const dateNow = require('../helpers/tools');

class Task {

    id= "";
    description="";
    dateEnd=null;
    dateStart='';

    constructor(description) {       

        this.id = uuidv4();
        this.description = description;
        this.dateEnd = null;
        this.dateStart = dateNow();
    }
}

module.exports = Task;

