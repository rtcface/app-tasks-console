require('colors');
const {saveDB, readDB} = require('./helpers/filesave');
// const { showMenu, pause } = require('./helpers/message');
const { inquirerMenu, pause, readInput,deleteMenu, confirmInput, completMenu } = require('./helpers/inquirer');
//const Task = require('./models/task');
const {Tasks} = require('./models/tasks');


const main = async() => {
    
    let opt='';
    const tasks = new Tasks();
    const DBTask = readDB();

    if(DBTask)
    {
        tasks.loadTasksFromArray(DBTask);
    }
    
    do {       
        //opt = await showMenu();
        // show menu option
        opt = await inquirerMenu();
        switch (opt) {
            case '1':                
                const description = await readInput('Into description of task: ');
                tasks.createTasks( description );
                await pause();
                break;
            case '2':
                tasks.listStylizedTasks(DBTask);
                await pause();
                break;

            case '3':
                tasks.listTaskForStatus('Compleate');
                await pause();
                break;
                
            case '4':
                tasks.listTaskForStatus('Pending');
                await pause();
                    
                break;

            case '5':
                const listIds = await completMenu( tasks.listArray);
                tasks.compleatTask(listIds);
                break;

            case '6':
                const id= await deleteMenu( tasks.listArray );
                if( id !== '0'){                    
                    const validate = await confirmInput('Are you sure to delete this task?');
                    if ( validate ) {                    
                        tasks.deleteTask( id );
                    } 
                }


                //tasks.deleteTask();
                break;
            case '0':

                break;
        }
        saveDB( tasks.listArray );
       
           
    } while (opt !== '0');

   

    
}

main();