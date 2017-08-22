

var mongoose = require('mongoose');
var IncIdSchema = require('../schemas/incId');
var IncIdModel = mongoose.model('incId', IncIdSchema);

module.exports = IncIdModel;
