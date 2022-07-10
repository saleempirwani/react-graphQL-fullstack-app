require('dotenv').config()
const colors = require('colors')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')
const connecDB = require('./config/db')

connecDB()


const PORT = process.env.PORT || 5000
const app = express()


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'dev'
}))

// app.get('/graphql', (req, res) => { res.send({ message: 'hello world' }) })

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}/graphql`))