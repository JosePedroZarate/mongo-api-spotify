// get an instance of mongoose and mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using
// module.exports

module.exports = mongoose.model('Historial', new Schema({
 title: String,
 url: String,
 date: {type:Date,default:new Date()},
 owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
 },
}));
