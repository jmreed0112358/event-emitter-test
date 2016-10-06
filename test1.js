'use strict'

var events = require('events'); 

var Test = function(eventEmitter) {
    this.eventEmitter = eventEmitter;
};

Test.prototype.listener1 = function() {
  console.log('listener1 executed');
};

Test.prototype.listener2 = function() {
  console.log('listener2 executed');
};

Test.prototype.activateListener1 = function() {
  this.eventEmitter.addListener('connection', this.listener1);
};

Test.prototype.activateListener2 = function() {
  this.eventEmitter.addListener('connection', this.listener2);
}

Test.prototype.deactivateListener1 = function() {
  this.eventEmitter.removeListener('connection', listener1);
}

Test.prototype.deactivateListener2 = function() {
  this.eventEmitter.removeListener('connection', listener2);
}

Test.prototype.getListenerCount = function() {
  var eventListeners = require('events').EventEmitter.listenerCount(this.eventEmitter, 'connection');
  console.log(eventListeners + ' listeners listening for connection events');
}

Test.prototype.emitConnection = function() {
  this.eventEmitter.emit('connection');
};

module.exports = Test;