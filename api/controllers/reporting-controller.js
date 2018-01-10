const Reporting = require('../model/reporting/reporting-model');

exports.getAll = (req, res) => {
	Reporting.getAll((err,docs) => {
		 if (err) throw err;
         res.status(200).send(docs);
	})
}

exports.create = (req,res) => {
	const newReporting = req.swagger.params.reporting.value;
	Reporting.create(newReporting,(err, result) => {
		if (err) throw err;
		res.json({message: 'OK'});
   })
}

exports.update = (req, res) => {
    const reportingId = req.swagger.params.id.value;
	const newReporting = req.swagger.params.reporting.value
	 Reporting.update(reportingId, newReporting, (err, result) => {
		if (err) throw err;
		res.json({message: 'OK'});
	 })
}