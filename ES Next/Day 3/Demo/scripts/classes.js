import HamadaClass from './Person.js';
import { role } from './Person.js';
import Student from './Student.js';

const mostafa = new HamadaClass('Mostafa', 'mostafa@gmail.com');
console.log(mostafa);
console.log(mostafa[role]);

const amira = new Student('Amira', 'amira@gmail.com', ['C++', 'Typescript']);
console.log(amira);
