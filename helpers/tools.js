
const dateNow = () => {
    let d = new Date();        
    let dformat = '';     
    dformat = [d.getMonth()+1,
        d.getDate(),
        d.getFullYear()].join('/')+' '+
       [d.getHours(),
        d.getMinutes(),
        d.getSeconds()].join(':');

    return dformat;
}

module.exports = dateNow;