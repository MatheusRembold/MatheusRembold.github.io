function deleteRow(button) {
    var row = button.parentNode.parentNode;
    var tbody = row.parentNode;
    tbody.removeChild(row);
}

document.getElementById('button1').addEventListener('click', () => showDiv('div1'));
document.getElementById('button2').addEventListener('click', () => showDiv('div2'));
document.getElementById('button3').addEventListener('click', () => showDiv('div3'));

function showDiv(divId) {
    document.getElementById('div1').classList.add('hidden');
    document.getElementById('div2').classList.add('hidden');
    document.getElementById('div3').classList.add('hidden');

    document.getElementById(divId).classList.remove('hidden');
}




document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h2>Post ID: ${data.id}</h2>
                <h3>Title: ${data.title}</h3>
                <p>${data.body}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `<p style="color: red;">Error fetching data.</p>`;
        });
}