const { Router } = require('express');
const router = Router();
const {db} = require('../models/firebase')


router.get('/', async (req,res) =>{

 const querySnapshot = await db.collection('usuario').get();
 
   console.log(querySnapshot.docs[0].data());

    res.send('Soy el get')
})

router.post('/', (req,res) =>{
    res.send('Soy el post')
})


module.exports = router;