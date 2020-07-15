const router = require('express').Router();
const auth = require('../middleware/auth');
const Toy = require('../models/toyModel');

router.get('/toys', async(req, res) => {
    const toys = await Toy.find();
    res.json(toys);
})

router.post('/create', async (req, res) => {
    try{
        let {titulo, descripcion, precio} = req.body; //Esto lo podemos hacer gracias a app.use(express.json())

        if(!titulo)
            return res
                .status(400)
                .json({mensaje: "El titulo no puede estar vacio"});
        
        const existingToy = await Toy.findOne({titulo: titulo});
        if(existingToy)
            return res  
                .status(400)
                .json({mensaje: "Ya existe un muñeco con ese titulo"});
            
        
        const newToy = new Toy ({
            titulo,
            descripcion,
            precio
        })

        const toySaved =  await newToy.save();
        res.json(toySaved);

    } catch(err){
        res.status(500).json({error: err.message});
    }
});

router.delete('/delete/:id', auth, async (req, res) => {
    try{
        const deletedToy = await Toy.findByIdAndDelete(req.params.id);
        res.json(deletedToy);
    } catch(err){
        res.status(500).json({error: err.message});
    }
});


module.exports = router;