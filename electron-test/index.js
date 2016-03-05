var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function(){
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});

console.log('Hello');
/*
var prefs = require('..');

console.log(prefs.isDarkMode());

prefs.on('dark-mode-change', function(mode){
    if (mode == 'on'){
        console.log('Dark!!!!');
    } else {
        console.log('Light!!!');
    }
    //jQuery('#current-mode').append('<p>Dark Mode</p>');
});
*/
