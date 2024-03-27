import Person from './Person.js';
export default class Student extends Person {
  constructor(name, email, classes = [], subjects = []) {
    super(name, email);
    this._classes = classes;
    this._subjects = subjects;
  }
  toString() {
    return super.toString() + ` and my classes are ${this._classes}`;
  }
}
