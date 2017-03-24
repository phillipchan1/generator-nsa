'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Let\'s build a startup node app site with the ' + chalk.red('generator-sss') + ' generator!'
    ));

    var prompts = [
      {
        name: 'appName',
        message: `What is your site's name?`,
        default: this.appName,
        required: true
      },
      {
        name: 'appDescription',
        message: `Give a description of your app`,
        default: this.appDescription,
        required: true
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath(''),
      this.destinationPath(this.props.appName),
      {
        appName: this.props.appName,
        appDescription: this.props.appDescription
      }
    );
  },

  end: function() {
    console.log(chalk.red('All done!'));
  },

  install: function () {
    this.installDependencies();
  },
});
