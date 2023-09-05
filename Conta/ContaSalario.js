import { Account } from "./Conta.js";

export class ContaSalario extends Account {
    constructor(client){
        super(0, client, 100)
    }

    sacar(value){
        const tax = 1.01
        return this._sacar(value, tax)
    }
}