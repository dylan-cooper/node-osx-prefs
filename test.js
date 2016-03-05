const assert = require('chai').assert;
const nodeOsxPrefs = require ('./lib/index');

var dm = nodeOsxPrefs.isDarkMode();
assert(dm === true || dm === false);

var color = nodeOsxPrefs.getAppearanceColor();
assert(color === 'Blue' || color === 'Graphite');

var color = nodeOsxPrefs.getHighlightColor();
assert(Array.isArray(color));
assert(color.length === 3);
for (var i = 0; i < 3; i++){
  //In range
  assert(color[i] >=0);
  assert(color[i] <= 255);
  //Integer
  assert(color[i] % 1 === 0);
}

var size = nodeOsxPrefs.getSidebarIconSize();
assert(size === 'Small' || size === 'Medium' || size === 'Large');

var visibility = nodeOsxPrefs.getScrollbarVisibility();
assert(visibility == 'Automatic' || visibility == 'WhenScrolling' || visibility == 'Always');

var paging = nodeOsxPrefs.isScrollbarPaging();
assert(paging === true || paging === false);

console.log('All tests passed!');

process.exit();
