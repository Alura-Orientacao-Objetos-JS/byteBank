// class Client {
//     name
//     cpf
//     rg

//     constructor(name, cpf, rg){
//         this.name = name
//         this.cpf = cpf
//         this.rg = rg
//     }
// }

class ContaCorrente {
    agency
    // #saldo = 0
    _sale = 0

    sacar(valor){
        if(this._sale >= valor){
            return this._sale -= valor
        }
    }

    depositar(valor){
        if(valor <= 0) return 
        this._sale += valor
    }
}

const contaCorrente = new ContaCorrente()
contaCorrente.agency = 1001

contaCorrente.depositar(60)
const valorSacado = contaCorrente.sacar(50)

console.log(valorSacado)
// console.log(contaCorrente)