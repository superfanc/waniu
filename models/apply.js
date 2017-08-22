
var mongoose = require('mongoose');
var ApplySchema = require('../schemas/apply');
var ApplyModel = mongoose.model('apply', ApplySchema);

module.exports = ApplyModel;
