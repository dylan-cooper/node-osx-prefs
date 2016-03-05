const objc = require('nodobjc');

var NodObjCWrapper = {};
module.exports = NodObjCWrapper.NodObjCWrapper = NodObjCWrapper;

NodObjCWrapper.init = function(){

  objc.framework('Foundation')

  // Setup the recommended NSAutoreleasePool instance
  var pool = objc.NSAutoreleasePool('alloc')('init');

  process.on('exit', function(){
      pool('drain');
  });

  return this;
}

NodObjCWrapper.toNSString = function(string){
  return objc.NSString('stringWithUTF8String', string);
}

NodObjCWrapper.getValue = function(setting){
  var defaults = objc.NSUserDefaults('standardUserDefaults');
  var domain = defaults('persistentDomainForName', objc.NSGlobalDomain);
  return domain('valueForKey', this.toNSString(setting['key']));
}
