const w = require('./nodobjc-wrapper');
const settings = require('./system-preferences.json');

w.init();

exports = module.exports = {};

exports.isDarkMode = function(){
  return w.getValue(settings['dark-mode']) != null;
}

exports.getAppearanceColor = function(){
  return (w.getValue(settings['appearance-color']) == 1) ? 'Blue' : 'Graphite';
}

exports.getHighlightColor = function(){
  var string_rep = w.getValue(settings['highlight-color']);
  var num_list = string_rep.toString().split(' ').map((i) => Math.round(Number(i)*255));
  return num_list;
}

exports.getSidebarIconSize = function(){
  size = w.getValue(settings['sidebar-icon-size']);
  return (size == 1) ? 'Small' : (size == 2) ? 'Medium' : 'Large';
}

exports.getScrollbarVisibility = function(){
  return w.getValue(settings['scrollbar-visibility']);
}

exports.isScrollbarPaging = function(){
  return w.getValue(settings['scrollbar-paging']) == 0;
}

