const mongoose = require('mongoose');

const reportingShema = mongoose.Schema({
	byte: Number,
	resource: String,
	user: String
});

module.exports = mongoose.model('Reporting', reportingShema);