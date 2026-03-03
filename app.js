let numeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentivas = 1;

function exibirTexto(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}
function mensagemInicial(){
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentivas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentivas = `Você descobriu o número secreto! com ${tentivas} ${palavraTentativa}.`;
                exibirTexto('p', mensagemTentivas);
                document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
                if (chute > numeroSecreto) {
                        exibirTexto('p', 'O número secreto é menor');
                } else {
                        exibirTexto('p', 'O número secreto é maior');
                }
                tentivas++;
                limparCampo();
        }
}


function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = numeroSorteado.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
    numeroSorteado = [];     
   }

   if(numeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
        numeroSorteado.push(numeroEscolhido);
        console.log(numeroSorteado);
        return numeroEscolhido;
   }
}

function limparCampo(){
 chute = document.querySelector('input');
 chute.value = '';
}

function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentivas = 1;
        mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true)

}