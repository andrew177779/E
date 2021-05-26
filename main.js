const parser = require('./parser.js');
const fs = require('fs');

const source = fs.readFileSync("index.es", "utf8")
const code = source.split('');
var parametr = [];
var command = [];

for(var index = 0; index < code.length; index++){
    if(code[index] !== "("){
        command.push(code[index]);
    } else {
        index++;
        for(; index < code.length; index++){
            if(code[index] === ")"){
                parser.init(command.join(''), parametr.join(''));
                index++;
                command = [];
                parametr = [];
                break;
            }
            else{
                parametr.push(code[index]);
            }
        }
    }
}
//init(source.split(''));