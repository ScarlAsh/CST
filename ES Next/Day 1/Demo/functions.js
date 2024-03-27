// myFun();
// function myFun(a) {
//   a = a || 5;
//   console.log('hello');
//   console.log(a);
//   // console.log(arguments[0]);
// }

// var myFun = function () {
//   console.log('ay 7aga');
// };

// const newFun = (a = 5) => {
//   console.log(a);
//   // console.log(arguments);
//   console.log('hello from new fun');
// };

// const sum = (num1, num2) => num1 + num2;

// const welcomeMessage = (name) => 'welcome ' + name;

// function testFun() {
//   console.log(this);
// } //who called it
// testFun(); //window

// const testFunArrow = () => {
//   console.log(this);
// };// where it was created 'what scope'

// testFunArrow(); //window

// var obj = {
//   age: 21,
//   getData: function () {
//     var that = this//obj;
//     function hamada(){
//       console.log(that)//obj
//     }
//     hamada()//window if console.log(this) instead of that
//   },
// };

// obj.getData();//obj

// var obj = {
//   age: 21,
//   getData: () => {
//     console.log(this);//window
//   },
// };
// obj.getData(); //window
// var obj = {
//   age: 21,
//   getData: function () {
//     console.log(this); //obj
//     const hamada = () => {
//       console.log(this); //obj
//     };
//     hamada();
//   },
// };

// obj.getData();

// var obj = {
//   age: 21,
//   getData: () => {
//     const hamada = () => {
//       console.log(this); //window
//     };
//     hamada();
//   },
// };

// obj.getData();

// var obj = {
//   age: 21,
//   getData: function () {
//     setTimeout(() => {
//       console.log(this); //obj
//     }, 1000);
//   },
// };

// obj.getData();

// const sum = (...args) => {
//   console.log(args);
// };

// let arr = [1, 2, 3, 4, 5];

// sum(...arr);

// let arr2 = ['ahmed', ...arr, 'alaa'];

// let [i, k, ...remaining] = [1, 2, 3, 4, 5];
// let [j, ...remaining2] = remaining;
// console.log(i, k, j);
const { age: userAge, ...remaining } = {
  name: 'mohamed',
  age: 21,
  getName() {},
  getAge() {},
};

const fun = ({ name, age, ...rest }) => {
  name;
};
// console.log(userAge);
// console.log(remaining);
// const userData = {
//   name: '',
//   email: '',
//   password: '',
// };
// const { password, ...rest } = userData;
// const { email } = { email: '' };

// const { name, email: userEmail } = rest;
// fun(rest);
// rest.email;

// function createUser(name, age, email) {
//   return {
//     name,
//     age,
//     email,
//   };
// }

// let arr = [1, 2, 4, 10, 20, 3];
// Math.min(...arr);

// let arr = [1, 3, 5];
let arr2 = ['ahmed', 'amany'];
// let father = 'mahmoud';
// let newArr = arr2.map((value, index) => {
//   console.log(value);
//   return `${value} ${father}`;
// });

// let filteredArr = arr.filter(function (value) {
//   return value % 2 == 0;
// });

// arr2.forEach(function (value) {
//   console.log(value);
// });

let [i, k] = [1, 2];
[i, k] = [k, i];
console.log(i); //2
console.log(k); //1
arr = [1, 2, 3, 4];
