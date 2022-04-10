/*const express = require('express')

const path = require('path')

const app = express()

app.get('/', (request, response) => {

	response.sendFile(path.join(`${__dirname}/../frontend/index.html`))

})
app.use('/public', express.static(`${__dirname}/../frontend/public`))

app.listen(9000, () => {

console.log("http://127.0.0.1:9000")

})*/



//import { express } from '/express.js'
const express = require('express');

const fetch = require("node-fetch")

//import { res } from 'express/lib/response.js'
const res = require('express/lib/response');

//import { students } from './students.json' assert { type: 'json' };

const app = express();

const port = 9000;

const students = require('./students.json');

app.get('/', (req, res) => {
  
    res.send(`<h1>Hello World! It's Codecool</h1>`)
});

app.get('/api/students', (req, res) => {
  
  res.send(students)
});

app.get('/api/students/*', (req, res) => {
  //console.log(req.params[0])
  res.send(students.find(d => d.id==req.params[0]))
});

app.get('/api/status/active', (req, res) => {
  //console.log(req.params[0])
  res.send(students.filter(d => d.status==true))
});

app.get('/api/status/finished', (req, res) => {
  //console.log(req.params[0])
  res.send(students.filter(d => d.status==false))
});

app.post('/api/students/name', (req, res) => {


  console.log(req.query['name'])
  console.log(req.query['status'])

  fs.readFile(`./students.json`, (error, data) => {

    if (error) {

        console.log(error);
        
        res.send("Error reading users file");

    } else {

        const users = JSON.parse(data);

        console.log(req.body)
        users.push(req.body);

        fs.writeFile(`./students.json`, JSON.stringify(users), 

        error => {

            if (error) {
                console.log(error);
                res.send("Error writing users file");
            }
        })

        res.send(req.body);
    }

  })

})

  /*res.writeFile('students.json', "name: " + "status: ")
  //console.log(['name'])

  res.status(200).json({msg:'Faszom beleverem'})
});*/

/*app.get('/frontend', (req, res) => {

	res.sendFile(path.join(`${__dirname}/../frontend/students.html`))

});

app.use('/api', express.static(`${__dirname}/../frontend/api`))*/

/*app.get('/frontend', (req, res) => {
  res.send(`<h2>Hello</h2>`)
});*/

/*app.get('/backend/data', (req, res) => {
  res.send(`<p>Data</p>`)
});*/

app.use('/frontend', express.static('frontend'))

app.listen(port, () => {

  console.log(`http://127.0.0.1:${port}`)

})
