const express = require('express')
const path = require('path')

// Initialize express
const app = express()
const port = process.env.PORT || 3000

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

app.get('/dashboard', (req, res) => {
    res.render('./interior/dashboard',  {
        title: 'Dashboard'
    })
})

app.get('/analytics', (req, res) => {
    res.render('./interior/analytics',  {
        title: 'Analytics'
    })
})

app.get('/explore', (req, res) => {
    res.render('./interior/explore',  {
        title: 'Explore'
    })
})

app.get('/settings', (req, res) => {
    res.render('./interior/settings',  {
        title: 'Settings'
    })
})
app.get('/account', (req, res) => {
    res.render('./bridge/account',  {
        title: 'Choose Your Account'
    })
})

app.get('/sparks', (req, res) => {
    res.render('./interior/sparks',  {
        title: 'Sparks'
    })
})

app.get('/settings', (req, res) => {
    res.render('./interior/settings',  {
        title: 'Settings'
    })
})
app.get('/data', (req, res) => {
    res.render('./interior/data',  {
        title: 'Data'
    })
})

app.get('/host', (req, res) => {
    res.render('./interior/host',  {
        title: 'Host'
    })
})

// Serving up static assets
app.use(express.static(path.join(__dirname, '../public')))

app.listen(port, () => {
    console.log('Server is up on port' + port)
})
