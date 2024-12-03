//enumerador textual, exemplo:

enum Cores {
//  indice = chave
    white = "#fff",
    black = "#000", 
    red =  "#f00",
    green = "#0f0",
    blue = "#00f"
}


console.log(Cores.white); //retornará o código hexadecimal;
console.log(Cores['green']); //retornará o código hexadecimal também
//console.log(Cores['#fff']); --> vai dar erro, no enum textual só pode ser capturado pelo índice, não pela chave
