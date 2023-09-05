import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    constructor(name, salary, cpf) {
        super(name, salary, cpf)
        this._bonus = 1.1
    }
}