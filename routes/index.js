const { Router } = require('express');
const router = Router();


router.get('/', (req,res) =>{
    res.send('Soy el get')
})

router.post('/', (req,res) =>{
    res.send('Soy el post')
})


module.exports = router;