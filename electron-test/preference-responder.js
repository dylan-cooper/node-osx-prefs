const prefs = require('remote').require('..');

function checkPrefs(){
  document.documentElement.classList.toggle('darkMode', prefs.isDarkMode());
  str = "";
  str += "<p>The system's appearance color is " + prefs.getAppearanceColor() + "</p>";
  str += "<p>The system's highlight color is " + prefs.getHighlightColor() + "</p>";
  str += "<p>The system's sidebar icon size is " + prefs.getSidebarIconSize() + "</p>";
  str += "<p>The scrollbar visibilty setting is " + prefs.getScrollbarVisibility() + "</p>";
  str += "<p>The scrollbar will " + (prefs.isScrollbarPaging() ? "" : "not") + " page</p>";
  document.getElementById('contents').innerHTML = str;
}

checkPrefs();
