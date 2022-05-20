const express = require('express');
const phoneModel = require('../models/phone.js');

const router = express.Router();

router.post('/post', async (req, res) => {
    const phone = new phoneModel({
        id: req.body.id,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        imageFileName: req.body.imageFileName,
        compressedFile: req.body.compressedFile,
        screen: req.body.screen,
        processor: req.body.processor,
        ram: req.body.ram
    })
    try {
        const saved_phone = await phone.save();
        res.status(200).json(saved_phone);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/getAll', (req, res) => {
    res.send('Getting all phones');
});

router.get('/getOne/:id', (req, res) => {
    res.send('Getting phone of id: ' + req.params.id);
});


module.exports = router;