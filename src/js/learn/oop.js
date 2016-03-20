// global namespace
var myApplication = myApplication || {};

// Create container called myApplication.commonMethod for common method and properties
myApplication.commonMethod = {
  name: null,
  setName: function setName(name) {
    name = this.name;
  },

  getName: function getName() {
    return this.name;
  }
};

// Object together with the method declarations
myApplication.event = {
  add: function add(el, type, fn) {
    // code stuff
  },
  remove: function remove(el, type, fn) {
    // code stuff
  },
  get: function get(e) {
    // code stuff
  }

    // Can add another method and properties
};

// Syntax for Using addListener method:
myApplication.event.add('element', 'eventName', callback);
