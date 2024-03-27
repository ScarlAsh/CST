function async1(callback) {
  setTimeout(function () {
    console.log('async1 running');
    callback('data from async 1');
  }, 1000);
}

function async2(dataFromAsync1, callback) {
  setTimeout(function () {
    console.log('async2 running');
    callback('result from async2 and' + dataFromAsync1);
  }, 1000);
}

function async3(dataFromAsync2, callback) {
  setTimeout(function () {
    console.log('async3 running');
    callback('final result from' + dataFromAsync2);
  }, 1000);
}

async1(function (data) {
  async2(data, function (datafrom2) {
    async3(datafrom2, function (datafrom3) {
      console.log(datafrom3);
    });
  });
});
