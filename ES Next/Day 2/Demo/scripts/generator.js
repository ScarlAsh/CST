//generator=>function => iterator object {next()} ,iterable

function* genFun() {
  yield 'hello';
  return false;
}

let iterObject = genFun(); //=>{next}
// iterObject.next(); //'hello'

function* genIds() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

let iterObject2 = genIds(); //=>{next}
5;

6 + 4;
10 + 5;
15;
