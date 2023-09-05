import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    constructor(name, salary, cpf) {
        super(name, salary, cpf)
        this._bonus = 2
    }
}