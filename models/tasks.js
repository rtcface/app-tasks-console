const Task = require('./task');
require('colors');

class Tasks {

    _list = {};
    _listTaskForStatus = [];

    get listArray() {

        const list = [];
        Object.keys(this._list).forEach(key => {
            
            const task = this._list[key];
            list.push( task );
        
        })
        
        return list;
    }

    constructor() {
     this._list = {};
    }

    loadTasksFromArray( tasks=[] ) {

        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }


    createTasks( description="" ) {
        const task = new Task( description );

        this._list[task.id] = task;
    }

    deleteTask( id="" ) {
        if( this._list[id] ){
            delete this._list[id];
        }
    }

    compleatTask( listIds=[] ) {
        listIds.forEach( id => {
            const task = this._list[id];

            if(!task.dateEnd)
                {
                    task.dateEnd= new Date().toISOString();
                }


        })

        this.listArray.forEach(task => {

            if(!listIds.includes( task.id )){
                this._list[task.id].dateEnd=null; 
            }

            
            
        });


    }




    listStylizedTasks() {
        
        console.log('');
        this.listArray.forEach(( task, i ) => {
            const index = `${ (i+1)+')' }`.magenta;
            const { description, dateEnd } = task ;
            const status = ( dateEnd ) 
                ? 'Complete'.green
                : 'Pending'.red ;
                
           console.log(`${index} ${ description } ::  ${status} `);     
        });
        // for (let index = 0; index <= tasks.length-1; index++) {
        //     const element = tasks[index];
        //     //console.log(element);
        //      console.log(`${((index+1).toString()+')').green} ${element.description} :: ${( element.dateEnd !== null) 
        //          ? 'Complete'.green : 'Pending'.red }`);
        // }
    }

    listTaskForStatus(s='Pending') {
        this._listTaskForStatus=[];
        console.log('');
        this.listArray.forEach(( task, i ) => {
            const index = `${ (i+1)+')' }`.magenta;
            const { description, dateEnd } = task ;
            const status = ( dateEnd ) 
                ? 'Compleate'
                : 'Pending' ;
                const output =`${index} ${ description } ::  ${(status === 'Compleate') 
                ? dateEnd.green : 'Pending'.red } `;                
           if ( s === status )
                //console.log(status);
                this._listTaskForStatus.push( output );     
        });

        this._listTaskForStatus.forEach(element => {
            console.log(element);
        });

    }


}




module.exports = {Tasks}