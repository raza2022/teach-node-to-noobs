const expres = require('express');
const app = expres();

app.get('/', (req, res) => {
   res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

//PORT
const port = process.env.PORT || 3000;

//params
//query params
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id)
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
    // res.send(req.params)
});



app.listen(port, ()=> {
    console.log(`listening on port ${port}....`)
});