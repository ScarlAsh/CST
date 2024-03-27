let str = 'this is a simple string';

str.replace('t', '');
str.replace(/t/, '');

const object = {
  [Symbol.replace]: function (string, arg) {
    if (string.length > arg) {
      return string.substring(0, arg) + '...';
    }
    return string;
  },
};
// str.replace(object);
