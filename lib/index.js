const w = require('./nodobjc-wrapper');
const EventEmitter = require('events').EventEmitter;
const settings = require('./system-preferences.json');

w.init();

exports = module.exports = new EventEmitter();

exports.__proto__.isDarkMode = function(){
  return w.getValue(settings['dark-mode']) != null;
}

w.addObserver(settings['dark-mode'], function(){
    exports.emit('dark-mode-change', exports.isDarkMode() ? 'on' : 'off');
});

exports.__proto__.getAppearanceColor = function(){
  return w.getValue(settings['appearance-color']) == 1 ? 'Blue' : 'Graphite');
});

w.addObserver(settings['appearance-color'], function(){
    exports.emit('appearance-color-change', exports.getAppearanceColor());
});

exports.__proto__.getAppearanceColor = function(){
  return w.getValue(settings['appearance-color']) == 1 ? 'Blue' : 'Graphite');
});

w.addObserver(settings['appearance-color'], function(){
    exports.emit('appearance-color-change', exports.getAppearanceColor());
});

