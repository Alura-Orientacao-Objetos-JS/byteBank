export class Client{
    get cpf(){
        return this._cpf
    }

    constructor(name, cpf, password){
        this.name = name
        this._cpf = cpf
        this._password = password
    }

    authenticator(password){
        return password === this._password
    }
}