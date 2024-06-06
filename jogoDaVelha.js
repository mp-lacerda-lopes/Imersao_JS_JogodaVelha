// CRIANDO JOGO DA VELHA EM JS

//DECLARANDO AS VARIÁVEIS * variáveis criadas dentro das funções só podem ser utilizadas dentro do seu escopo

let tabuleiro;
let quadro;
let aviso;
let jogador;
let linha;
let coluna;


//função para iniciar o jogo
function iniciar(){
    tabuleiro = [];
    quadro = document.getElementById('quadro');
    aviso = document.getElementById('aviso');
    jogador = 1;

    for(let i=0; i < 3; i++){
        tabuleiro[i]= [];
        for (let j = 0; j < 3; j++){
            tabuleiro[i][j] = 0;
        }
    }

    console.table(tabuleiro);
    exibir();

}

//função para exibir o tabuleiro - vai montar o tabuleiro
function exibir(){
    let tabela = '<table cellpadding="10" border="1">'

    for(let l = 0; l < 3; l++ ){
        tabela += '<tr>'

        for(let c = 0; c < 3; c++){
            switch(tabuleiro[l][c]){
                case -1: marcador = 'X'; break;
                case 1: marcador = 'O'; break;
                default: marcador = '_'
            }


        tabela += '<td>' + marcador + '</td>';
        }
        
        tabela += '</tr>';
        
    }

    tabela += '</table>';

    quadro.innerHTML = tabela;

}

//função para marcar as jogadas
function jogar(){
    aviso.innerHTML = 'Vez do jogador: ' + numeroJogador();

    linha = document.getElementById('linha').value - 1;
    coluna = document.getElementById('coluna').value - 1;

    if(tabuleiro[linha][coluna] == 0){
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1;
    }else{
        aviso.innerHTML = 'Esse campo já foi marcado';
    }

    console.table(tabuleiro);
    jogador++
    exibir();
    checar();

}

function numeroJogador(){
    return jogador%2 + 1;
}

//função para checar se já existe vencedor ou empate
function checar(){
//Checando linhas
for(let i = 0; i < 3; i++){
    let soma = 0;
    soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];
    if(soma == 3 || soma == -3){
        aviso.innerHTML = 'O jogador ' + numeroJogador() + ' venceu o jogo!';
    }
}
//Checando Colunas
for(let i = 0; i < 3; i++){
    let soma = 0;
    soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[0][i];
    if(soma == 3 || soma == -3){
        aviso.innerHTML = 'O jogador ' + numeroJogador() + ' venceu o jogo!';
    }
}
//Checando a diagonais
for(let i = 0; i < 3; i++){
    let soma = 0;
    soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
    if(soma == 3 || soma == -3){
        aviso.innerHTML = 'O jogador ' + numeroJogador() + ' venceu o jogo!';
    }
}
for(let i = 0; i < 3; i++){
    let soma = 0;
    soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
    if(soma == 3 || soma == -3){
        aviso.innerHTML = 'O jogador ' + numeroJogador() + ' venceu o jogo!';
    }
}
}



