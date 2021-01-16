const express = require('express')
const path = require('path')

// Initialize express
const app = express()

// Rendering handlebars template views
app.set('view engine', 'hbs')

app.get('/login', (req, res) => {
    res.render('./bridge/login',  {
        title: 'Wildfire - Log In'
    })
})

app.get('/signup', (req, res) => {
    res.render('./bridge/signup',  {
        title: 'Wildfire - Sign Up'
    })
})

app.get('/fires', (req, res) => {
    res.render('./interior/fires',  {
        title: 'Fires'
    })
})