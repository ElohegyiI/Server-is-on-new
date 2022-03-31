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



app.get('/', (req, res) => {
  
    res.sendFile(path.join(`${__dirname}/../frontend/welcome.html`))
});


app.get('/frontend', (req, res) => {

	res.sendFile(path.join(`${__dirname}/../frontend/students.html`))

});

app.use('/api', express.static(`${__dirname}/../frontend/api`))

/*app.get('/frontend', (req, res) => {
  res.send(`<h2>Hello</h2>`)
});*/

/*app.get('/backend/data', (req, res) => {
  res.send(`<p>Data</p>`)
});*/

app.use('/frontend', express.static('frontend'))



app.listen(port, () => {

  console.log(`http://127.0.0.1:${port}/frontend/welcome.html`)

})
