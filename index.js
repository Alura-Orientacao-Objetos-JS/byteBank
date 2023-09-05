import { Client } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { authSystem } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Murilo", 10000, 12345678900)
diretor.registerPassword(123456)
const gerente = new Gerente("Marina", 7000, 98765432100)
gerente.registerPassword(90909)

const Augusto = new Client("Augusto", 56789012344, 987650)

const gerenteLogin = authSystem.login(gerente, 90909)
const diretorLogin = authSystem.login(diretor, 123456)
const augustoLogin = authSystem.login(Augusto, 987650)

console.log(gerenteLogin, diretorLogin, augustoLogin)