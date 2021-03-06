
'use strict';

var path = require('path');
var _ = require('lodash');

//获取环境变量值
function requiredProcessEnv(name) {
  if (!process.env[name]) {
    //throw new Error('You must set the ' + name + ' environment variable');
    console.log('You must set the ' + name + ' environment variable');
  }
  return process.env[name] || 'development';
}

// 初始化基础配置数据
var all = {
  env: requiredProcessEnv('NODE_ENV')
};

module.exports = _.merge(
  all,
  require('./' + requiredProcessEnv('NODE_ENV') + '.js') || {});
