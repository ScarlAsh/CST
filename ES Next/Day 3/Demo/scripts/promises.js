function async1(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('async1 running');
      if (number < 10) {
        resolve(number);
      } else {
        reject('number is bigger than 10');
      }
    }, 1000);
  });
}

function async2(dataFromAsync1) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('async2 running');
      resolve('result from async2 and' + dataFromAsync1);
    }, 1000);
  });
}

function async3(dataFromAsync2) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('async3 running');
      resolve('final result from' + dataFromAsync2);
    }, 1000);
  });
}

async1(9)
  .then(function (data) {
    return async2(data);
  })
  .then(function (dataFromAsync2) {
    return async3(dataFromAsync2);
  })
  .then(function (dataFromAsync3) {
    console.log(dataFromAsync3);
  })
  .catch(function (error) {
    console.error(error);
  });
