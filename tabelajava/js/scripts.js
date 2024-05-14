var titulo = document.querySelector(".titulo-pagina");
titulo.textContent = "JavaScript";


//titulo.addEventListener('click', mostrarMensagem);
//titulo.addEventListener('click', mostrarSegundaMensagem);

function mostrarMensagem() {
    alert('Mostrando Mensagem');
}

function mostrarSegundaMensagem() {
    alert('Mostrando Segunda Mensagem');
    titulo.removeEventListener('click', mostrarSegundaMensagem);
}

//chamando função ao clicar
//titulo.onclick = mostrarMensagem

//chamando função ao passar o mouse em cima
//titulo.onmouseover = mostrarMensagem

//chamando função ao clicar duas vezes
//titulo.ondblclick = mostrarMensagem


var alunos = document.querySelectorAll('.aluno');
for (let i = 0; i < alunos.length; i++) {

    var trAluno = alunos[i]

    var tdTrabalho = trAluno.querySelector('.td-trabalho').textContent

    var tdProva = trAluno.querySelector('.td-prova').textContent

    var tdTrabalho2 = Number(tdTrabalho)

    var tdProva2 = Number(tdProva)

    var mediaResultado = trAluno.querySelector('.td-media')

    var notaTrabalhov = true
    var notaProvav = true

    if (tdTrabalho2 < 0 || tdTrabalho2 > 10) {

        console.log('Nota do trabalho errada')
        notaTrabalhov = false;
    };

    if (tdProva2 < 0 || tdProva2 > 10) {

        console.log('Nota da prova errada')
        notaProvav = false;
    };

    if (notaTrabalhov && notaProvav) {

        var mediaConta = (tdTrabalho2 + tdProva2) / 2
        mediaResultado.textContent = mediaConta

        if (mediaConta < 7) {
            trAluno.classList.add('aluno-reprovado')
        }
    } else {
        mediaResultado.textContent = "Notas Inválidas"
    }
}

function calcularMedia(tdTrabalho2, tdProva2) {
    var mediaAluno = (parseFloat(tdTrabalho2) + parseFloat(tdProva2)) / 2;
    return mediaAluno;
}

function validarNotaTrabalho(notaTrabalhov){
    if(notaTrabalhov.length == 0 || notaTrabalhov < 0 || notaTrabalhov > 10){
        console.log("Erro!!!");
        return false;
    } else{
                return true;
            }
        }

    function validarNotaProva(notaProvav){
        if(notaProvav.length == 0 || notaProvav < 0 || notaProvav > 10){
            console.log("Erro!!!");
            return false;
        }else{
                 return true;
                }
            }
            function validarNome(nome) {
                if (nome.length == 0) {
                    alert('Nome inválido')
                    return false
                } else {
                    return true
                }
            }
           
