var print = [];
var num_str = [];

function wr_for(){
    console.log("for print:");
    for(var i = 0; i < parseInt(num_str); i++){ 
        console.log(print.join(''));
    }
}

function wr(parametr){
    print = [];
    var param = parametr.split('');
    if(param[0] === '"'){
        print = param;
        print.pop();
        print.shift();
        console.log(print.join(''));
    }
}
module.exports = {
    wr: wr
};