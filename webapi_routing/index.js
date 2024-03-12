const express = require('express');

const app = express();

app.use(express.json());

let users = [
    { 'email': 'jeff@jeff.co', 'username' : 'jeff' },
    { 'email': 'alice@alice.co', 'username' : 'alice' },
    { 'email': 'bob@bob.co', 'username' : 'bob' },
];



app.get('/users', function  (req, res) {
    res.json(users);
});

app.get('/users/:userid', function  (req, res) {
    let idx = parseInt(req.params.userid);
    let usr = users[idx];

    res.json(usr);
} );

app.post('/users', function  (req, res) {
    
    console.log(req.body); 
    let usr = JSON.parse(req.body);

    users.push(usr);
    res.send({'success': 1});
});

app.put('/users/:userid', function  (req, res) {
    let idx = parseInt(req.params.userid);
    
    users[idx] = req.body;

    res.send({'success': 1});
});


app.delete('/users/:userid', function  (req, res) {
    let idx = parseInt(req.params.userid);

    users.splice(idx, 1);

    res.send({'success': 1});
});


/*
app.get('/' , function (req, res) {
    res.send('Hello World from get');
});

app.post('/' , function (req, res) {
    res.send('Hello World from post');
});

app.post('/:name' , function (req, res) {
    let name = req.params.name;
    res.send('Hello ${name}');
});

app.get('/ab+c+d' , function (req, res) {
    res.send(req.url);
});
*/