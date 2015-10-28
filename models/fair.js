// require dependencies
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

//define fair schema
var FairSchema = new Schema({
	fairId: String,
	name: String,
	city: String,
	state: String,
	country: String,
	website: String,
	affiliations:[String],
	startDate: String,
	endDate: String,
	longitude: String,
	latitude: String 
});

// define fair model
var Fair = mongoose.model("Fair", FairSchema);
// exports fair model - not sure whether to use .fair or not
module.exports = Fair;


