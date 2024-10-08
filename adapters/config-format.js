const vscode = require('vscode');

var format = function (element) {
  var show_hosts = vscode.workspace.getConfiguration('smartssh').showHostsInPickLists;
  var config = {
    name: (show_hosts) ? element.username + '@' + element.host : element.name, // Used for serverlist
    username: element.username, // Used for authorization
    password: element.password, // Used for authorization (can be undefined)
    host: element.host, // Used for authorization
    port: element.port, // Used for authorization (can be undefined)
    privateKey: element.privateKey, // Used for authorization (can be undefined)
    agent: element.agent, // Used for authorization (can be undefined)
    project: element.project, // Used for fast button (can be undefined)
    path: element.path, // Used for `cd` after start session (can be undefined)
    customCommands: element.customCommands, // Used for specify commands which will execute on session start
  };
  return config;
};

module.exports = format;
