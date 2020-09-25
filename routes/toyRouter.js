const router = require('express').Router();
const auth = require('../middleware/auth');
const Toy = require('../models/toyModel');
const multer = require('multer');

var storage = multer.diskStorage({
    //Destination es donde queremos que se guarde el archivo
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    //filename: Como vamos a llamar al archivo
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    //filefilter: de que extension pueden ser los archivos subidos
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if(ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('Solamente jpg, png estan permitidos'), false);
        }
        cb(null, true)
    }
})

//metemos la const storage en otra llamada upload
var upload = multer({ storage: storage }).single('file');

//Este metodo anda pero le saque el auth, tendriq ue ver dsp como ponerlo devuelta
router.post("/uploadImage", (req, res) => {
    //Luego de agarrar la imagen desde la carpeta client, tenemos que guardarla dentro del servidor de Node
    upload(req, res, err => {
        if(err) return res.json({ success: false, mensaje: "No te esta tomando el upload" });
        return res.json({ success: true, image: res.req.file.path, Filename: res.req.file.filename })
    })
});

router.get('/getToys', async(req, res) => {
    const toys = await Toy.find();
    res.json(toys);
})

router.post('/getToysPost', async(req, res) => {
    const toys = await Toy.find();
    res.json(toys);
});

router.post('/create', async (req, res) => {
    try{
        const toy = new Toy(req.body);

        await toy.save((err) => {
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({ success: true })
        });

    } catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get('/toy/:id', async (req, res) => {
    const toy = await Toy.findById({ _id: req.params.id });
    res.json(toy);
})

router.put('/edit/:id', async (req, res) => {
    const { titulo, descripcion, precio, categoria } = req.body;
    await Toy.findOneAndUpdate({ _id: req.params.id }, {
        titulo,
        descripcion,
        precio,
        categoria
    });
    res.json({ success: true });
});

router.delete('/delete/:id', async (req, res) => {
    try{
        const deletedToy = await Toy.findByIdAndDelete(req.params.id);
        res.json(deletedToy);
    } catch(err){
        res.status(500).json({error: err.message});
    }
});



module.exports = router;