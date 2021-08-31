const fs = require('fs');
const pathfile = './db/db.json';
 
const saveDB = ( data ) => {

    fs.writeFileSync( pathfile, JSON.stringify( data ) );

}

const readDB = () => {

    if( !fs.existsSync( pathfile ) ) 
    {
        return null;
    }

    const info = fs.readFileSync( pathfile, {encoding: 'utf-8'});
    const data = JSON.parse(info)
    //console.log(data);

    return data;
}


module.exports = { saveDB, readDB };