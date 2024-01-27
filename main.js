const form = document.getElementById('form-contatos');
const nomes = [];
const numeros = [];
const spanAdicionado = '<span class="contato adicionado">Adcionado</span>';


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
});

function adcionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    
    nomes.push(inputNomeContato.value);
    numeros.push(parseFloat(inputNumeroContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '<tr>';
    
    linhas += linha;
    
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas ;
}

