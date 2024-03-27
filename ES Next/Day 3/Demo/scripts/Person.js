export const role = Symbol();
export default class Person {
  static _counter = 0;
  #password = '1234';
  constructor(name = 'guest', email = 'guest email') {
    Person.counter += 1;
    this._name = name;
    this._email = email;
    this[role] = 'guest';
  }

  get name() {
    return this._name;
  }

  get passwordPublic() {
    return this.#password;
  }

  set name(value) {
    this._name = value;
  }

  static set counter(value) {
    this._counter = value;
  }
  toString() {
    return `Hello this is ${this.name} and my email is ${
      this._email
    } and my password is ${this.#password}`;
  }
}

// Person.prototype.toString = function () {
//   return `Hello this is ${this.name} and my email is ${
//     this._email
//   } and my password is ${this.#password}`;
// };
