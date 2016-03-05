const assert = require('chai').assert;
const nodeOsxPrefs = require ('./lib/index');
describe('node-osx-prefs', function(){
  describe('isDarkMode', function(){
    it('returns a boolean', function(){
      var dm = nodeOsxPrefs.isDarkMode();
      assert(dm === true || dm === false);
    });
  });
  describe('getAppearanceColor', function(){
    it('returns Blue or Graphite', function(){
      var color = nodeOsxPrefs.getAppearanceColor();
      assert(color === 'Blue' || color === 'Graphite');
    });
  });
  describe('getHighlightColor', function(){
    it('returns an array of 3 integers between 0 and 255', function(){
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
    });
  });
  describe('getSidebarIconSize', function(){
    it('returns Small, Medium or Large', function(){
      var size = nodeOsxPrefs.getSidebarIconSize();
      assert(size === 'Small' || size === 'Medium' || size === 'Large');
    });
  });
  describe('getScrollbarVisibility', function(){
    it('returns Automatic, WhenScrolling or Always', function(){
      var visibility = nodeOsxPrefs.getScrollbarVisibility();
      assert(visibility == 'Automatic' || visibility == 'WhenScrolling' || visibility == 'Always');
    });
  });
  describe('isScrollbarPaging', function(){
    it('returns a boolean', function(){
      var paging = nodeOsxPrefs.isScrollbarPaging();
      assert(paging === true || paging === false);
    });
  });
});
