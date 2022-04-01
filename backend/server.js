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

const express = require('express')

//const fetch = require("node-fetch")

const res = require('express/lib/response')

const app = express()

const port = 9000;

const students = require('./students.json')

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

app.post('/api/students', (req, res) => {
  console.log(req.query['name', 'status'])
  //res.writeFile('students.json')
  res.status(200).json({msg:'hiba van'})
});

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
