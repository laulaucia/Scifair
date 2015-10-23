// require dependencies
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,

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
	coordinates: String, 
});