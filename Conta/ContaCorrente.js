import { Account } from "./Conta.js"

export class ContaCorrente extends Account{
    static accounts = 0
    constructor(client, agency){
        super(0, client, agency)
        ContaCorrente.accounts += 1
    }

    sacar(value) {
        const tax = 1.1
        return this._sacar(value, tax)
    }
}