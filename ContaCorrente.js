export class ContaCorrente{
    agency
    client

    // #saldo = 0
    _sale = 0

    constructor(agency, client){
        this.agency = agency
        this.client = client
    }

    sacar(valor){
        if(this._sale >= valor) {
            return this._sale -= valor
        }
        
    }

    depositar(valor){
        if(valor <= 0) return 
        return this._sale += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}