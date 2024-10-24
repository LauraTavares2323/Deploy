// script.js
async function buscarUsuarios() {
    const response = await fetch('http://localhost:3000/api/dados');
    const dados = await response.json();
    const usuariosDiv = document.getElementById('usuarios');
    usuariosDiv.innerHTML = JSON.stringify(dados);
}

buscarUsuarios();
