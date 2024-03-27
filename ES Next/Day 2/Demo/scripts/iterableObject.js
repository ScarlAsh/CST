const user = {
  name: 'mohamed',
  email: 'mohamed@gmail.com',
  age: 25,
  [Symbol.iterator]: function () {
    const keys = Object.keys(this); //['name','email','age']
    let index = 0;
    return {
      next: () => {
        if (index < keys.length) {
          return { value: [keys[index], this[keys[index++]]], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};
//function=>iterator object {next()} =>iterable
const userGenerator = {
  name: 'mohamed',
  email: 'mohamed@gmail.com',
  age: 25,
  [Symbol.iterator]: function* () {
    const keys = Object.keys(this); //['name','email','age']=>iterable
    for (let key of keys) {
      yield [key, this[key]];
    }
  },
};
