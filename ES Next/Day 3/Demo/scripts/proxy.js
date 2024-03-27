//Proxies
const set = function (object, key, value) {
  if (key in object) {
    if (key == 'age') {
      if (!isFinite(value)) {
        throw 'age must be a number';
      }
    }
    if (key == 'name') {
      if (typeof value != 'string') {
        throw 'name must be a string';
      }
    }
    object[key] = value;
  } else {
    throw "You can't enter a new prop";
  }
};
const pHandler = {
  get(object, key) {
    if (key in object) {
      return object[key];
    } else {
      throw "This key doesn't show.";
    }
  },
  set,
};
// function({}){

// }
const p = new Proxy({ name: '', age: '', email: '' }, pHandler);

p.name = 'Mohamed';
console.log(p.name);
console.log(p.age);
