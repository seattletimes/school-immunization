module.exports = {
  debounce: function(f, interval) {
    var timeout = null;
    return function() {
      if (timeout) return;
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      timeout = setTimeout(function() {
        f.apply(null, args);
        timeout = null;
      }, interval || 400);
    };
  }
};