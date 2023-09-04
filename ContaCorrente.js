import { Account } from "./Conta.js";

export class ContaCorrente extends Account{
    static accounts = 0;
    constructor(client, agency){
        super(0, client, agency)
        ContaCorrente.accounts += 1;
    }

    teste(){
        console.log("teste na classe Conta Corrente")
    }

    sacar(value) {
        let tax = 1.1
        return super._sacar(value, tax)
    }
}