//Exemplo mais básico de enum
//Faça uma função que retorne o status do usuário, se ele é admim, usuário comum ou editor

function checkStatus(status: number) {
    switch (status) {
        case 1:
            console.log('É admin');
            break;
        case 2:
            console.log('É um editor');
            break;
        case 3:
            console.log('É apenas um usuário normal')
    }
}

checkStatus(3);

//O enum torna mais inteligivel e legivel o código, por exemplo:
//Uso de enum para definir os atributos;
enum userStatus {
    Admin = 1,
    Editor = 2,
    User = 3
}

function newCheck(status: number) {
    switch (status) {
        case userStatus.Admin:
            console.log('É admin');
            break;
        case userStatus.Editor:
            console.log('The user are an editor');
            break;
        case userStatus.User:
            console.log(`He's just a normal user`);
            break;
    }
}

newCheck(3);