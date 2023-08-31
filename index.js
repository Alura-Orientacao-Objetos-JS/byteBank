class Client {
    name
    cpf
    agency
    balance
    rg

    constructor(name, cpf, agency, balance, rg){
        this.name = name
        this.cpf = cpf
        this.agency = agency
        this.balance = balance
        this.rg = rg
    }
}

const client1 = new Client('Murilo', 98458904238, 4234, 4234, 1542641432)
const client2 = new Client('Alice', 56546234534, 543543, 5432534, 54637829348576)
console.log(client1, client2)