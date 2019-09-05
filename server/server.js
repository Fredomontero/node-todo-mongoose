var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user')

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Started on port 3000');
});

// app.post('/todos', (req, res) => {
//     // console.log(req.body);
//     var todo = new Todo({
//         text: req.body.text
//     });
// });

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    },(e) => {
        res.status(400).send(e);
    })
});

module.exports = {app};



//This was for testing

//Creating an object
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to sabe todo');
// });

//Another object
// var otherTodo = new Todo({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to sabe todo');
// });

// var newUser = new User({
//     email: 'chris@mail.com'
// });

// newUser.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });