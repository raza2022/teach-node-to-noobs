const http = require('day1/http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World')
        res.end();
    }
});
server.listen(3000);

console.log("listening on port 3000...");