require('colors');

const showMenu = () => {

    return new Promise((resolve) => {
        
        console.clear();
        console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*".rainbow);
        console.log("          Task To=>Do ".rainbow);
        console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*".rainbow);
        console.log("          Select an option ".rainbow);
        console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*\n".rainbow);
    
        console.log(`${ '(1)'.rainbow } - Create Task`);
        console.log(`${ '(2)'.rainbow } - List Task`);
        console.log(`${ '(3)'.rainbow } - List Complete Tasks`);
        console.log(`${ '(4)'.rainbow } - List Pending Tasks`);
        console.log(`${ '(5)'.rainbow } - Finish Task`);
        console.log(`${ '(6)'.rainbow } - Delete Task`);
        console.log(`${ '(0)'.rainbow } - Exit\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout, 
        });
    
        readline.question('Select an option: ', (opt) => {
            resolve(opt);
            readline.close();
        }) 

    });
    

}

const pause = () => {

    return new Promise((resolve) => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout, 
        });
    
        readline.question(`\n Press ${ 'ENTER'.green } to continue... \n`,
         (opt) => {
            readline.close();
            resolve();
        })
        
    });


}


module.exports = {
    showMenu, pause
}