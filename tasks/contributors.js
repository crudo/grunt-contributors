/*
 * grunt-contributors
 * https://github.com/crudo/grunt-contributors
 *
 * Copyright (c) crudo <crudo@crudo.cz>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    var fs = require('fs');

    grunt.registerTask('contributors', 'Get contributors and put them in package.json.', function() {
        var _        = grunt.util._;
        var options  = this.options();
        var readpath = options.readpath || 'package.json';
        var writepath = options.writepath || 'package.json';

        var done = this.async();

        var processData = function (data) {
            var child = grunt.util.spawn({
                cmd: 'git',
                args: ['log', '--no-merges', '--format="%aN|%aE"']
            }, function callback(err, result, code) {
                if (err) {
                    grunt.log.warn('git log failed');
                    grunt.log.warn('Error code: '+code);
                    grunt.log.warn(err);
                    done(!code);
                    return;
                }

                if (!result.stdout) {
                    grunt.log.warn('git log empty output');
                    done(!code);
                    return;
                }

                var _contributors = result.stdout.toString().replace(/"/mig, '').split("\n");

                var contributors = _contributors.map(function (item) {
                   var pair = item.toString().split("|");
                   return {
                       name: pair[0],
                       email: pair[1]
                   };
                });

                if (options.add && options.add.length) {
                    contributors = contributors.concat(options.add);
                }

                // get unique by email
                contributors = _.uniq(contributors, function (item) {
                    return item.email;
                })

                contributors = _.sortBy(contributors, 'name');

                data.contributors = contributors;

                grunt.file.write(writepath, JSON.stringify(data, null, '\t'));
                grunt.log.writeln('File ' + writepath.yellow + ' updated.');

                done(!code);
            });
        };

        if (!grunt.file.exists(readpath)) {
            grunt.log.warn('Source file "' + readpath + '" not found.');
            return false;
        }

        processData(grunt.file.readJSON(readpath));
    });
};
