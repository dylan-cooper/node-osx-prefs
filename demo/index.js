var systemPreferences = require ('../lib/index.js');

console.log('Dark mode on? ' + systemPreferences.isDarkMode());

systemPreferences.on('dark-mode-change', function(mode){
  if (mode === 'on'){
    console.log('Changed to dark mode');
  } else {
    console.log('Changed to light mode');
  }
});

console.log('Appearance Color? ' + systemPreferences.getAppearanceColor());

systemPreferences.on('appearance-color-change', function(color){
  if (color === 'Blue'){
    console.log('Changed to Blue color scheme');
  } else {
    console.log('Changed to Graphite color scheme');
  }
});

console.log(systemPreferences.getHighlightColor());

systemPreferences.on('highlight-color-change', function(color){
  console.log('Highlight color changed to: ' + color);
});

console.log(systemPreferences.getSidebarIconSize());

systemPreferences.on('sidebar-icon-size-change', function(size){
  console.log('Sidebar icon size changed to: ' + size);
});

console.log(systemPreferences.getScrollbarVisibility());

systemPreferences.on('scrollbar-visibility-change', function(visibility){
  console.log('Scrollbar visibility changed to: ' + visibility);
});

console.log(systemPreferences.isScrollbarPaging());

systemPreferences.on('scrollbar-paging-change', function(isPaging){
  if (isPaging){
    console.log('Scrollbar will page');
  } else {
    console.log('Scrollbar will not page');
  }
});
//process.exit();
