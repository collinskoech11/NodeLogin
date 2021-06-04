const express = require('express')//setup basic express app
const app = express()//app variable from expresss 
const bcrypt = require('bcrypt')// password hashing 
const passport = require('passport')

const inittializePassport = require('./passport-config')
inittializePassport(
    passport, 
    email =>  users.find(user => user.email === email)
    )

const users = []

app.set('view-engine','ejs')//set the view engine to ejs npm installed package
app.use(express.urlencoded({ extended: false })) // access req post
//setup route for the application 
app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'coko'})//need to be logged in to acces
})//file in views

//login route
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
//login post route 
app.post('/login', (req, res) => {
    
})
//register route
app.get('/register', (req, res) => {
    res.render('register.ejs')
})

//Register post route 
app.post('/register', async (req, res) => { //async so that try catch can be implemented
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,  10)
        users.push({
            id: Date.now().toString(),
            name:req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
       res.redirect('/register')  
    }
    console.log(users)
})
app.listen(3000)