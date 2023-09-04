import { Account } from "./Conta.js";

export class ContaPoupanca extends Account{
    constructor(saleInit, client, agency){
        super(saleInit, client, agency)
    }
}