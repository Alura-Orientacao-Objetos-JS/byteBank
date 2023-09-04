import { Client } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const murilo = new Client('Murilo', 12345678900)

const muriloContaCorrente = new ContaCorrente(murilo, 2002)
muriloContaCorrente.depositar(200)
muriloContaCorrente.sacar(100)

const contaPoupanca = new ContaPoupanca(200, murilo, 2002)
contaPoupanca.sacar(100)

console.log(muriloContaCorrente)
console.log(contaPoupanca)