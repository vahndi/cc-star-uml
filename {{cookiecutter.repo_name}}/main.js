const commandGroup1 = require('./commands/command-group-1');


function init() {
    app.commands.register('{{cookiecutter.repo_name}}:command-group-1.hello-world', commandGroup1.helloWorld);
}


exports.init = init;
