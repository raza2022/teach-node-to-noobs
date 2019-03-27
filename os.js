const os = require('os');

let totalMemory =os.totalmem();
let freeMemory =os.freemem();

console.log(`Total Memory:` + totalMemory /1024 / 1024 / 1024);
console.log(`Free Memory:` + freeMemory / 1024/ 1024 / 1024);
console.log(`used Memory:` + (totalMemory - freeMemory)/1024/ 1024 / 1024);