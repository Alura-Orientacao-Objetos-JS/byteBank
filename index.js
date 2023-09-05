import { Client } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"
import { ContaSalario } from "./ContaSalario.js"

const murilo = new Client('Murilo', 12345678900)

const muriloContaCorrente = new ContaCorrente(murilo, 2002)
const muriloContaPoupanca = new ContaPoupanca(20, murilo, 2002)
const muriloContaSalario = new ContaSalario(murilo)
muriloContaSalario.depositar(100)
muriloContaSalario.sacar(50)

console.log(muriloContaSalario)