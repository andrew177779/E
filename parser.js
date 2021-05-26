const wr = require('./imp/wr.js');

function init(command, parametr){
    //console.log(command);
    //console.log(parametr);
    switch(command){
        case "wr":
            wr.wr(parametr);
            break;
        default:
            wr.wr(parametr);
            break;
    }
}
module.exports = {
    init: init
};