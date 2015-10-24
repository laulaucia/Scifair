 mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || 
                      'mongodb://localhost/scifair' );

 module.exports = require('./fair');
