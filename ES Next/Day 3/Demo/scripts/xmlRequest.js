const getData = new Promise((resolve, reject) => {
  const x = new XMLHttpRequest();

  x.open('GET', 'https://reqres.in/api/users?page=2');

  x.onreadystatechange = function () {
    if (x.readyState == 4) {
      if (x.status == 200) {
        resolve(JSON.parse(x.responseText));
      } else {
        reject(x.responseText);
      }
    }
  };

  x.send('');
});

// getData
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

fetch('https://reqres.in/api/users?page=2')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function getUserData(apiUrl) {
  const row = `   <tr>
      <td data-label="Account">${obj.name}</td>
      <td data-label="Due Date">${obj.email}</td>
      <td data-label="Amount">$1,190</td>
      <td data-label="Period">03/01/2016 - 03/31/2016</td>
    </tr>`;

  // table.innerhtml += (row);
}
