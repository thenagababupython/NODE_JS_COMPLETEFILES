/*
    1) fs module
    2) os module
    3) http module
    4) path Module
 */
//load os module
const os = require('os');
const fs = require('fs');

// total memory
console.log(`total memory : ${os.totalmem()}`);

//free memory
console.log((`free memory : ${os.freemem()}`));

//host name
console.log((`host name : ${os.hostname()}`));

//home directory
console.log((`home directory : ${os.homedir()}`));

//user name
console.log((`user name : ${os.userInfo().username}`));

//current file name
console.log((`file name : ${__filename}`));

//write to a files
fs.writeFile('data.txt','good moring','utf8',(err) =>{
    if(err) throw err;
    console.log('data saved');
});

//read a file
fs.readFile('03_app.js','utf8',(err,data) => {
    if(err) throw err;
    fs.writeFile('data.txt','good moring','utf8',(err) =>{
        if(err) throw err;
        console.log('data saved');
    });

})
