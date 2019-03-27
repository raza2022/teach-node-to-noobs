const fs = require('fs');

// let files = fs.readdirSync('./');
// console.log(files)

fs.readdir('$', (err, files) => {
    if(err){
        console.log("error", err)
    }
    console.log('Files...', files)
});
