const { Router } = require('express');
const router = Router();
const {db} = require('../models/firebase')


router.get('/', async (req,res) =>{

 const querySnapshot = await db.collection('usuario').get();
 
   //console.log(querySnapshot.docs[0].data());

   const usuario = querySnapshot.docs.map(doc=>({
    id: doc.id,
    Nickname: doc.data().Nickname
   }))

   console.log(usuario)
    res.send('Soy el get')
})

router.post('/', (req,res) =>{
    res.send('Soy el post')
})


module.exports = router;