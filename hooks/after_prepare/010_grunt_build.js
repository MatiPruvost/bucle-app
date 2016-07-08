#!/usr/bin/env node
'use strict';
var exec = require('child_process').exec;
   exec('cordova-icon',
  function(error, stdout, stderr) {
  		console.log(stdout);
  		console.log(stderr);
  		if (error !== null) {
  			console.log('cordova-icon:\n' + error);
			process.exit(1);
  		}
      var exec2 = require('child_process').exec;
         exec2('cordova-splash',
      	function(error, stdout, stderr) {
      		console.log(stdout);
      		console.log(stderr);
      		if (error !== null) {
      			console.log('cordova-splash:\n' + error);
  				process.exit(1);
      		}
      	});
  });
