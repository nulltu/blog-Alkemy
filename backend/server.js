const express = require('express')
const cors = require('cors')
const routes = require('./routes/api')
const e = require('express')

const app = express()

require('./config/db')

app.use(cors())
app.use(express.json())

app.use('/api', routes);

app.listen(4000, ()=>{
    console.log('listening on port 4000')
})
