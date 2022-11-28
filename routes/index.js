const { Router, request, response, urlencoded } = require('express');
const router = Router();
const express = require('express')
const app = express();

//?Controllers
const { chatController} = require('../controllers/chatControllers');
const { homeController} = require('../controllers/homeControllers');
const { resdirectChat} = require('../controllers/loginControllers');
const{loginController}=require('../controllers/LoginGoogleController')
const { registerController} = require('../controllers/registerControllers');
const{registroUsuario}=require('../firebase/signup')
const{ingresoUsuario}=require('../firebase/singin')
const{ingresoOAuth}=require('../firebase/emailFbLogin')
const{oA}=require('../firebase/signOut')

//Home
router.get('/', homeController)


//

//Registro | Login
router.get('/register', registerController)
router.post('/register',registroUsuario)

router.get('/login', loginController)
router.post('/login', ingresoUsuario)
router.get('/_/auth', ingresoOAuth)


//Chat
router.get('/chat', chatController)




module.exports = router;