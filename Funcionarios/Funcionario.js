export class Funcionario {
    _name
    _salary
    _cpf
    _bonus
    _password

    constructor(name, salary, cpf){
        this._name
        this._salary
        this._cpf

        this._bonus = 1
        this._password
    }

    authenticator(password){
        return password === this._password
    }

    registerPassword(password){
        this._password = password
    }
}