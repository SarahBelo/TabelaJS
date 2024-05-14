var tabela = document.querySelector("#tabela-alunos");
//Seleciona um elemento HTML com o ID "tabela"
tabela.addEventListener("click", function(event){
//Captura o elemento HTML que fooi clicado dentro da tabela
    var elementoClicado = event.target;

    if(elementoClicado.classList.contains("btn-excluir")){

        var celula = elementoClicado.parentNode;
        var linha = celula.parentNode;

        linha.remove();
    }
})