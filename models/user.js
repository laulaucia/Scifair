// require dependencies
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt'),
  salt = bcrypt.genSaltSync(10);

//define user schema
var UserSchema = new Schema({
	email: String,
	passwordDigest: String
});
//create a new user with secure (hashed) password
UserSchema.statics.createSecure = function (email, password, callback){
	//'this' references our schema - store it in variable user to keep context
	var user = this;

	//hash password user enters at startup
	bcrypt.genSalt(function(err, salt){
		bcrypt.hash(password, salt, function(err, hash){
			console.log(hash);

			//create the new user and save to db with hashed password
			User.create({
				email: email,
				passwordDigest: hash
			}, callback);
		});
	});
};

// authenticate user when user logs in
UserSchema.statics.authenticate = function(email, password, callback){
	// find user by email entered at login
	this.findOne({email: email}, function(err, user){
		console.log(user);
	// throw an error if the user cant be found
	if (!user){
		console.log('No user found with email '+ email);
	//if found user check if password is correct
	} else if (user.checkPassword(password)){
		callback(null, user);
	}
	});
};

//compare password user enters with hashed password (passwordDigest)
UserSchema.methods.checkPassword = function(password){
	//run hashing with salt on password entered to compare with password digest
	return bcrypt.compareSync(password, this.passwordDigest);
};

// define user model
var User = mongoose.model('User', UserSchema);
// exports user model
module.exports = User;