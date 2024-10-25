document.getElementById('enviar').onclick = () => {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;

    fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, sobrenome })
    })
    .then(response => response.json())
    .then(data => {
        const listaDiv = document.getElementById('lista');
        listaDiv.innerHTML += `<p>${data.nome} ${data.sobrenome}</p>`;
        document.getElementById('nome').value = '';
        document.getElementById('sobrenome').value = '';
    })
    .catch(err => console.error(err));
};