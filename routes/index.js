const { Router } = require('express');
const router = Router();

//?Controllers
const { chatController} = require('../controllers/chatControllers');
const { homeController} = require('../controllers/homeControllers');
const { loginController} = require('../controllers/loginControllers');
const { registerController} = require('../controllers/registerControllers');

//Home
router.get('/', homeController)



//Registro | Login
router.get('/register', registerController)

router.get('/login', loginController)



//Chat
router.get('/chat', chatController)

module.exports = router;