var arrayHelper = require('../helper/array');

/**
 * Returns the day of a month
 */
function getToday() {
  return new Date().getDate();
}

/**
 * Array of days
 */
function createDoors(array) {
  return array.map(function newDoor(index) {
    return {
      day: index,
      open: false
    };
  });
}

/**
* Generates days
*/
function generateCalendar() {
  var days;
  var calendar;
  days = arrayHelper.range(1, 24);
  calendar = createDoors(days);
  return calendar;
}

/**
 * Set open door
 */
function openDoor() {
  var thisDay = getToday();
  return thisDay;
}

function addElement(message) {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement('div');
  var newContent = document.createTextNode(message);
  var currentDiv;
  // add the text node to the newly created div.
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the DOM
  currentDiv = document.getElementById('div1');
  document.body.insertBefore(newDiv, currentDiv);
}


addElement('Today is ' + openDoor() + 'nd of December');
addElement('So there are ' + (generateCalendar().length - openDoor()) + ' days left to X-Mas!');
