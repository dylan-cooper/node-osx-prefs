const w = require('./nodobjc-wrapper');
const EventEmitter = require('events').EventEmitter;
const settings = require('./system-preferences.json');

w.init();

exports = module.exports = new EventEmitter();

exports.isDarkMode = function(){
  return w.getValue(settings['dark-mode']) != null;
}

w.addObserver(settings['dark-mode'], function(){
    exports.emit('dark-mode-change', exports.isDarkMode() ? 'on' : 'off');
});

exports.getAppearanceColor = function(){
  return (w.getValue(settings['appearance-color']) == 1) ? 'Blue' : 'Graphite';
}

w.addObserver(settings['appearance-color'], function(){
    exports.emit('appearance-color-change', exports.getAppearanceColor());
});

exports.getHighlightColor = function(){
  var string_rep = w.getValue(settings['highlight-color']);
  var num_list = string_rep.toString().split(' ').map((i) => Math.round(Number(i)*255));
  return num_list;
}

w.addObserver(settings['highlight-color'], function(){
    exports.emit('highlight-color-change', exports.getHighlightColor());
});

exports.getSidebarIconSize = function(){
  size = w.getValue(settings['sidebar-icon-size']);
  return (size == 1) ? 'Small' : (size == 2) ? 'Medium' : 'Large';
}

w.addObserver(settings['sidebar-icon-size'], function(){
    exports.emit('sidebar-icon-size-change', exports.getSidebarIconSize());
});

exports.getScrollbarVisibility = function(){
  return w.getValue(settings['scrollbar-visibility']);
}

w.addObserver(settings['scrollbar-visibility'], function(){
    exports.emit('scrollbar-visibility-change', exports.getScrollbarVisibility());
});

exports.isScrollbarPaging = function(){
  return w.getValue(settings['scrollbar-paging']) == 0;
}

w.addObserver(settings['scrollbar-paging'], function(){
    exports.emit('scrollbar-paging-change', exports.isScrollbarPaging());
});

