const { Router, request, response, urlencoded } = require('express');
const router = Router();
const express = require('express');

//?Controllers
const { chatController} = require('../controllers/chatControllers');
const { homeController} = require('../controllers/homeControllers');
const { resdirectChat} = require('../controllers/loginControllers');
const{loginController}=require('../controllers/LoginGoogleController')
const { registerController} = require('../controllers/registerControllers');
const salasController = require('../controllers/salasController');

const{registroUsuario}=require('../firebase/signup');
const{ingresoUsuario}=require('../firebase/singin');
const{ingresoOAuth}=require('../firebase/emailFbLogin');
const{change}=require('../firebase/stateOnChat');
const{stageRoom}=require('../controllers/SignInUser')

//Home
router.get('/', homeController);


//

//Registro | Login
router.get('/register', registerController);
router.post('/register',registroUsuario);

router.get('/login', loginController);
router.post('/login', ingresoUsuario);
router.get('/signInUser',stageRoom)
router.get('/_/auth', ingresoOAuth);


//Chat
router.get('/chat', chatController);
router.get('/chat', change);

//Salas
router.get('/salas', salasController.mostrarSalas);



module.exports = router;