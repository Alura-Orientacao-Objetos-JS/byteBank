import { Client } from "./Cliente.js";
import { Account } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const murilo = new Client('Murilo', 12345678900)

const muriloContaCorrente = new Account(200, murilo, 2002)
muriloContaCorrente.depositar(500)
muriloContaCorrente.sacar(100)

const contaPoupanca = new Account(200, murilo, 2002)

console.log(contaPoupanca)