const prefs = require('remote').require('..');

console.log(prefs);

//const jQuery = require('jquery');

console.log(prefs.isDarkMode());

//prefs.on('darkMode', function(){
//    console.log('Dark!!!!');
    //jQuery('#current-mode').append('<p>Dark Mode</p>');
//});

//prefs.on('lightMode', function(){
//    console.log('Light!!!');
    //jQuery('#current-mode').append('<p>Light Mode</p>');
//});
