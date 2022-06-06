var fs = require('fs')
var written = "exports.add = function mat(a,b){return a * b}"

//read file
fs.readFile('calc1.js','utf-8',function(err,data)
{
    console.log(err)
    console.log(data)
})


//Replaces contents of file...creates file if it doesnt exist
/*
fs.writeFile('calc.js', written, function(err){
    console.log("File written to and replaced")
})
*/


//append contents to a file

/*
fs.appendFile('calc.js', written, function(err){
    console.log("File written to and replaced")
})
*/


//delete a file
/*
fs.unlink('calc1',function(err){

    console.log(err)
})
*/