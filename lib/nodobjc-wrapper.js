const objc = require('nodobjc');
const EventLoop = require('./nodobjc-event-loop');

var NodObjCWrapper = {};
module.exports = NodObjCWrapper.NodObjCWrapper = NodObjCWrapper;

NodObjCWrapper.init = function(){
  EventLoop.initObjC(objc);
  var loop = new EventLoop();

  objc.framework('Foundation')
  loop.start();

  this.mainQueue = objc.NSOperationQueue('mainQueue');
  this.defaultCenter = objc.NSDistributedNotificationCenter('defaultCenter');

  // Setup the recommended NSAutoreleasePool instance
  var pool = objc.NSAutoreleasePool('alloc')('init');
  this.callbackList = [];

  //Need to keep a reference so that the callback isn't garbage collected
  process.on('exit', function(){
      this.callbackList;
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

NodObjCWrapper.addObserver = function(setting, action){
  callback = objc(function(self, notification){
    action();
  }, ['v', ['?', '@', '@']]);
 
  this.defaultCenter(
    'addObserverForName', this.toNSString(setting['notification-name']),
    'object', null,
    'queue', this.mainQueue,
    'usingBlock', callback
  );

  this.callbackList.push(callback);
}
