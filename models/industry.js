
var mongoose = require('mongoose');
var IndustrySchema = require('../schemas/industry');
var IndustryModel = mongoose.model('industry', IndustrySchema);

module.exports = IndustryModel;

