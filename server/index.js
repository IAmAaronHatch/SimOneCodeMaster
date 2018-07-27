const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const massive = require('massive')

require('dotenv').config()

const app = express()
app.use(bodyParser.json())

massive ( process.env.CONNECTION_STRING ).then( db => {
    app.set('db', db)
}).catch( err => console.log(err) )


app.get('/api/inventory', controller.getProducts )
app.post('/api/inventory', controller.addProducts )
app.put('/api/inventory/:id', controller.updateProducts )
app.delete('/api/inventory/:id', controller.deleteProducts )



const PORT = 4000
app.listen( PORT, () => {
    console.log('listening on port:', PORT)
})