const express = require('express');
const phoneModel = require('../models/phone.js');

const router = express.Router();

// Post one phone
router.post('/post', async (req, res) => {
    // Creates the object to populate
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
        const saved_phone = await phone.save(); // Tries to save in the DB
        res.status(200).json(saved_phone); // Sends back the object just saved
    } catch (error) {
        res.status(400).json({ message: error.message }); // Sends back the error
    }
});

// Get all phones
router.get('/', async (req, res) => {
    try {
        const phones = await phoneModel.find(); // Find all phones in the DB
        console.log('Retrieving all phones')
        await new Promise(resolve => setTimeout(resolve, 2000)); // Waits 2 seconds to see loading bar
        res.status(200).json(phones); // Sends back all the phones
    } catch (error) {
        res.status(404).json({message: error.message}); // Sends back the error
    }
});

// Get one phone by id
router.get('/getOne/:id', async (req, res) => {
    try {
        // Find phone by general id. This functions DOES NOT searh by the _id field (internal to mongoose)
        const phone = await phoneModel.find({ id: req.params.id });
        res.status(200).json(phone); // Sends back all the phones
    } catch (error) {
        res.status(404).json({ message: error.message }); // Sends back the error
    }});

// Update one phone by id
router.patch('/update/:id', async (req, res) => {
    // Find phone by general id. Update the data received in req.body.
    // update_result contains the just update phone
    try{
        const updated_phone = await phoneModel.findOneAndUpdate(
            {id: req.params.id},
            req.body,
            {new: true});
        res.status(200).send(updated_phone) // Sends back the updated phone
    } catch(error) {
        res.status(400).json({ message: error.message }); // Sends back the error
    }
})

// Delete one phone by id
router.delete('/delete/:id', async (req, res) => {
    try {
        deleted_phone = await phoneModel.findOneAndDelete(
            {id: req.params.id});
        res.status(200).json({ message: 'Deleted ' + deleted_phone.name });
    } catch (error) {
        res.status(400).json({ message: error.message }); // Sends back the error
    }
})

module.exports = router;