const fs = require('fs');

console.log(process.argv) //to take the parameter in command

//to read the files
fs.readdir(`${__dirname}/${process.argv[2]}`, (err, files) => {
    //to catch the errors
    if (err) {
        console.log("error occured",err)
    } //if no errors occured it will print files
    else {
        console.log(files);
       
    }
})
