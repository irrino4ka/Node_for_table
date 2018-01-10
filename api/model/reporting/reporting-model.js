const Reporting = require('./reporting-shema');
const ObjectID = require('mongodb').ObjectID

exports.getAll = (cb) => {
	Reporting.find({}, (err, docs) => {
		 cb(err, docs);
	});        
}

exports.create = (reporting, cb) => {
	const newReporting = Reporting(reporting);
	newReporting.save((err,result) => {
		cb(err,result);
	});
}

exports.update = (id, reporting, cb) => {
	Reporting.findByIdAndUpdate(id, reporting, (err, result) => {
        cb(err,result);
    });
}
