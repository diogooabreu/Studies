//em enum do tipo numerico os n-umeros, chaves, não precisam ser definidos, eles são definidos automaticamente e seguem em ordem crescente
//os numeros só precisam ser especificados quando se deseja ter numeros diferentes da sequencia padrão

enum typeUser {
    USER,
    ADMIN,
    SUPER
}

console.log(typeUser.SUPER); //retornará 2, pois a contagem sempre comela do 0.