import { Client } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const murilo = new Client('Murilo', 12345678900, 123456789)
const muriloContaCorrente = new ContaCorrente(1001, murilo)

console.log(murilo)
console.log(muriloContaCorrente)

const valorDepositado = muriloContaCorrente.depositar(100)
console.log(`Você depositou R$${valorDepositado}`)
const valorSacado = muriloContaCorrente.sacar(50)
console.log(`Você sacou R$${valorSacado}`)


const jose = new Client('José', 99876543211, 98765432)
const joseContaCorrente = new ContaCorrente(2002, jose)

joseContaCorrente.depositar(500)

let valor = 200
joseContaCorrente.transferir(valor, muriloContaCorrente)

console.log(`Valor: ${valor}`)
console.log(muriloContaCorrente)
console.log(joseContaCorrente)