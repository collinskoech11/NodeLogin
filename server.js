const express = require('express')//setup basic express app
const app = express()//app variable from expresss 

app.set('view-engine','ejs')//set the view engine to ejs npm installed package
//setup route for the application 
app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'coko'})//need to be logged in to acces
})//file in views

//login route
app.get('/login', (req, res) => {
    res.render('login.ejs')
})

//register route
app.get('/register', (req, res) => {
    res.render('register.ejs')
})

//Register post route 
app.post('/register', (req, res) => {
    
})
app.listen(3000)