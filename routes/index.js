const { Router } = require('express');
const router = Router();
const { paginaInicio } = require('../controllers/homeControllers');

//Home
router.get('/', paginaInicio)



<<<<<<< HEAD
 const querySnapshot = await db.collection('usuario').get();
 

   const usuario = querySnapshot.docs.map(doc=>({
    id: doc.id,
    ...doc.data()
   }))

   console.log(usuario)
    res.send('Soy el get')
})

router.post('/', (req,res) =>{
    res.send('Soy el post')
})
=======
//Usuarios
>>>>>>> 03907b159c78d1352d913ce350885c1afabfb1b4


module.exports = router;