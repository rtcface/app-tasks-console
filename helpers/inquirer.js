const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
require('colors');

const questions = [

    {
        type: 'list',
        name: 'opt',
        message: 'What would you like to do? \n\n ',
        choices: [
            {
                value: '1',
                name: `${'1)'.yellow} Create Task`
            },
            {
                value: '2',
                name: `${'2)'.yellow} List Task`
            },
            {
                value: '3',
                name: `${'3)'.yellow} List Compleate Task`
            },
            {
                value: '4',
                name: `${'4)'.yellow} List Pending Task`
            },
            {
                value: '5',
                name: `${'5)'.yellow} Finish Task`
            },
            {
                value: '6',
                name: `${'6)'.yellow} Delete Task`
            },
            {
                value: '0',
                name: `${'0)'.yellow} Exit the application.`
            },
        ]
    }
];


const inquirerMenu = async() => {
 
    console.clear();
    console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*".yellow);
    console.log("*          Task To=>Do         *".white.bold);
    console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*".yellow);
    console.log("*          Select an option    *".white.bold);
    console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*\n".yellow);
   
   const { opt } = await inquirer.prompt(questions);

   return opt;

}

const questionsPause = [{
    type:'input',
    name:'pause',
    message: `Press ${ 'ENTER'.green } to continue... \n`
}
];

const pause = async() => {
    console.log('\n');
    await inquirer.prompt(questionsPause);
}

const readInput = async(message='') => {

    const question = [
        {
            type: 'input',
            name: 'quest',
            message,
            validate( value ){
                if( value.length === 0 ) {
                    return 'pleas enter a valid message';
                } return true;
            }
        }

    ];
    
    const { quest  } = await inquirer.prompt(question);
    return quest;
}

const deleteMenu = async ( listTask=[] ) => {
    let count = 0;
    const choices = listTask.map(
        task => {
            count++
            return {
                value: task.id,
                name: (count+') ').yellow+task.description,
            }
        }
    )
    
    choices.unshift(
        {
            value: '0',
            name:'0)'.green+' Cancelar'
        }
    )
    //console.log(choices);
    
    const questions = [
        {
            type: 'list',
            name: 'opt',
            message: 'What task would you like to delete? \n\n ',
            choices
        }
    ];

    const { opt } = await inquirer.prompt(questions);

   return opt;

}

const confirmInput = async(message='') => {

    const question = [
        {
            type: 'confirm',
            name: 'quest',
            message,            
        }

    ];
    
    const { quest  } = await inquirer.prompt(question);
    return quest;
}

const completMenu = async ( listTask=[] ) => {
    let count = 0;
    const choices = listTask.map(
        task => {
            count++
            return {
                value: task.id,
                name: (count+') ').grey+task.description,
                checked: (task.dateEnd) ? true : false,
            }
        }
    )

    const questions = [
        {
            type: 'checkbox',
            name: 'opt',
            message: 'What task would you like to complet? \n\n ',
            choices
        }
    ];

    const { opt } = await inquirer.prompt(questions);

   return opt;

   
}


module.exports = {
    inquirerMenu, pause, readInput, deleteMenu, confirmInput, completMenu
}
