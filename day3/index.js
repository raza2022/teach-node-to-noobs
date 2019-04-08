const expres = require('express');
const app = expres();

//
app.use(expres.json());

const Courses = [
    {id: 1, name: "Course1"},
    {id: 2, name: "Course2"},
    {id: 3, name: "Course3"}
]

app.get('/', (req, res) => {
   res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(Courses);
});

//PORT
const port = process.env.PORT || 3000;

//params
//query params
app.get('/api/courses/:id', (req, res) => {
    const course = Courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('The Course with given Id is not Found')
    }
    res.send(course)
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
    // res.send(req.params)
});



//post
app.post('/api/courses', (req, res) => {
    const course = {
        id: Courses.length + 1,
        name: req.body.name
    };
    Courses.push(course);
    res.send(course)
});





app.listen(port, ()=> {
    console.log(`listening on port ${port}....`)
});