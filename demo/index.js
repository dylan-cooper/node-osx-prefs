var systemPreferences = require ('../lib/index.js');

console.log(systemPreferences);

console.log(systemPreferences.isDarkMode());

systemPreferences.on('dark-mode', function(mode){
  if (mode === 'on'){
    console.log('Changed to dark mode');
  } else {
    console.log('Changed to light mode');
  }
});

//process.exit();
