 mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || 
                      'mongodb://localhost/scifair' );

 module.exports.Fair = require('./fair');

 module.exports.User = require('./user');