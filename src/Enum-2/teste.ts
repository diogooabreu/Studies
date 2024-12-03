//enum: São enumeradores
//São um conjunto de dados que podem ser classificados por valores numerais ou textuais

enum diaSemana  {
    Domingo = 0, //o dia da semana deve ser associado a uma chave
    SegundaFeira = 1,
    TercaFeira = 2,
    QuartaFeira = 3,
    QuintaFeira = 4,
    SextaFeira = 5,
    Sabado = 6
}

console.log(diaSemana.Domingo); //retornará o valor relacionado a Domingo, nesse caso 1.
console.log(diaSemana['Domingo']); //também retornara 1, afinal o enum reconhece os valores dentro do [] como chaves,
console.log(diaSemana[1]); //nesse caso retornará 'Domingo', pois ela retorna o vslor associado a chave, que é 1.


let dia = new Date();
console.log(dia); //retornará a data atual
console.log(dia.getDate()); //retorna o dia do mês
console.log(dia.getTime()); //só por curiosidade, retorna a hora atual kajskas (em milissegundos)
console.log(dia.getDay()); //retorna o dia da semana, que sempre começa sendo 0 = domingo,
console.log(diaSemana[dia.getDay()]); //não retorna 0 nesse caso, pois faz a relação com o enum, e 0 = Domingo.