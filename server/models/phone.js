const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
	id: Number,
	name: String,
	manufacturer: String,
	description: String,
    color: String,
	price: Number,
	imageFileName: String,
    compressedFile: String,
	screen: String,
	processor: String,
	ram: Number
});

module.exports = mongoose.model('Phone', phoneSchema);