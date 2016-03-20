var myApplication = (function singleton() {
  var instance;
  myApplication = function isInstance() {
    if (instance) {
      return instance;
    }
    instance = this;
  };

  return myApplication;
}());
