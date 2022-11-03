const { Router } = require('express');
const router = Router();

//Home
router.get('/', (req,res)=>{
    res.render('home')
})

//Registro | Login
router.get('/register', (req,res)=>{
    res.render('register')
})

router.get('/login', (req,res)=>{
    res.render('login')
})



//Chat
router.get('/chat', (req,res)=>{
    res.render('chat')
})


module.exports = router;