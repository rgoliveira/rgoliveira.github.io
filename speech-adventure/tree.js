//(function (undefined) {
  "use strict";

  var hooks = {};

  var triggerHook = function(hook) {
    console.log('triggering ' + hook);
    console.log(hooks['hello']);
    if (hooks[hook]) hooks[hook]();
  }

  hooks['end'] = function() {
    alert('THE END!');
  }
//}).call(this);