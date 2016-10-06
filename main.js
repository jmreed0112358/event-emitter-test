'use strict'

var readline = require('readline-sync'),
  events = require('events'),
  Test1 = require('./test1'),
  Test2 = require('./test2'),
  choice = '',
  shouldRun = true,
  eventEmitter = new events.EventEmitter(),
  test1 = new Test1(eventEmitter),
  test2 = new Test2(eventEmitter);

while(shouldRun) {
  choice = readline.question('Enter command: ');

  switch (choice) {
    case 'quit':
      console.log('quitting!');
      shouldRun = false;
      break;
    case 'emit1':
      test1.emitConnection();
      break;
    case 'emit2':
      test2.emitConnection();
      break;
    case 'emit-both':
      test1.emitConnection();
      test2.emitConnection();
      break;
    case 'test-emit':
      eventEmitter.emit('connection');
      break;
    case 'activate':
      test1.activateListener1();
      test1.activateListener2();
      test2.activateListener1();
      test2.activateListener2();
      break;
    case 'deactivate':
      test1.deactivateListener1();
      test1.deactivateListener2();
      test2.deactivateListener1();
      test2.deactivateListener2();
      break;
    case 'count':
      test1.getListenerCount();
      break;
    default:
      console.log('I didn\'t understand your request');
      break;
  }
}

console.log('Exiting.');