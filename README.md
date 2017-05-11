# grunt-contributors [![Build Status](https://travis-ci.org/crudo/grunt-contributors.svg?branch=master)](https://travis-ci.org/crudo/grunt-contributors)

[![Greenkeeper badge](https://badges.greenkeeper.io/crudo/grunt-contributors.svg)](https://greenkeeper.io/)
>Save contributors into package.json.

## Getting Started
This plugin requires Grunt `~0.4`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contributors --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contributors');
```

## The "contributors" task

### Overview
In your project's Gruntfile, add a section named `contributors` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    contributors: {
        options: {
            add: [{
                "name": "Marak Squires",
                "email": "marak@nodejitsu.com"
            }]
        }
    }
})
```

### Options

#### options.add
Type: `Array`

List of contributors which should be added.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License

[The MIT License](LICENSE.txt)
