const express = require('express')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let todo = [];

app.get('/mytodo', (req,res) =>{
    res.json(todo);
})
let temp = [];
app.get('/mytodo/:tag', (req, res) => {
    for(i=0; i<todo.length; i++) {
        if (i.tag === req.params.tag) {
            temp.push(i);
        }
    }
    res.json(temp);
});

app.post('/mytodo/newtask', (req,res) =>{
    let newTodo = {
        title: req.body.title,
        status: req.body.status,
        tag : req.body.tag
    }
    todo.push(newTodo);
    res.send(`New Task added`)
})

app.delete('/mytodo/delete', (req,res) => {
    todo.pop(task => task.title === res.body.title);
    res.send('Task deleted successfully');
})

app.put('/mytodo/modify', (req, res) => {
    todo.pop(task => task.title == req.body.title);
    let modifiedTask = {
        title : req.body.title,
        status : req.body.status,
        tag : req.body.tag
    }
    todo.push(modifiedTask)
    res.send(`Task has been updated successfully`)
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})
