import { Client } from "./Cliente.js"

export class ContaCorrente{
    agency
    #client
    
    // #saldo = 0
    #sale = 0
    
    set client(newValue){
        if(newValue instanceof Client){
            this.#client = Client
        }
    }
    
    get client(){
        return this.#client
    }

    get sale(){
        return this.#sale
    }
    

    constructor(agency, client){
        this.agency = agency
        this.#client = client
    }

    sacar(valor){
        if(this.#sale >= valor) {
            return this.#sale -= valor
        }
        
    }

    depositar(valor){
        if(valor <= 0) return 
        return this.#sale += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}