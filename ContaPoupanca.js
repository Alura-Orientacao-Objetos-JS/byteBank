import { Account } from "./Conta.js"

export class ContaPoupanca extends Account{
    constructor(saleInit, client, agency){
        super(saleInit, client, agency)
    }

    sacar(value){
        const tax = 1.02
        return this._sacar(value, tax)
    }
}