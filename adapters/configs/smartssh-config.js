const vscode = require('vscode');
const format = require('../config-format');
var adapter = {};

adapter.filename = 'settings.json';
adapter.codesettings = true;
adapter.formatter = function () {
  var result = true;
  var configs_array = [];
  var elements = vscode.workspace.getConfiguration('smartssh').serverList;
  elements.forEach(element => {
    configs_array.push(format(element));
  });
  return { result, configs: configs_array };
};

module.exports = adapter;
