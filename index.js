import { Client } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const murilo = new Client('Murilo', 12345678900, 123456789)
const muriloContaCorrente = new ContaCorrente(1001, murilo)

const jose = new Client('José', 99876543211, 98765432)
const joseContaCorrente = new ContaCorrente(2002, jose)
joseContaCorrente.depositar(500)

let valor = 200
joseContaCorrente.transferir(valor, muriloContaCorrente)