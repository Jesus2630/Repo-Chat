const { Router } = require('express');
const router = Router();
const { paginaInicio } = require('../controllers/homeControllers');

//Home
router.get('/', paginaInicio)



//Usuarios


module.exports = router;