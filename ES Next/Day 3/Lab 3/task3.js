function myfun(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Create table element
            var table = document.createElement('table');
            table.classList.add('table', 'table-dark');

            // Create table header
            var headerRow = table.insertRow();
            ['ID', 'Name', 'Username', 'Email', 'City', 'Street', 'Zipcode', 'Suite', 'Company'].forEach(function (headerText) {
                var th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            // Create table rows
            data.forEach(function (element) {
                var row = table.insertRow();
                ['id', 'name', 'username', 'email', 'address.city', 'address.street', 'address.zipcode', 'address.suite', 'company.name'].forEach(function (key) {
                    var cell = row.insertCell();
                    cell.textContent = key.split('.').reduce(function (obj, k) {
                        return obj[k];
                    }, element);
                });
            });

            // Append table to the document body
            document.body.appendChild(table);
        })
        .catch(function (error) {
            console.error(error);
        });
}

myfun('https://jsonplaceholder.typicode.com/users');
