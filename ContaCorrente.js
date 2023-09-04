import { Client } from "./Cliente.js"

export class ContaCorrente{
    static accounts = 0
    agency
    #client
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
        ContaCorrente.accounts += 1
    }

    sacar(value){
        if(this.#sale >= value) {
            return this.#sale -= value
        }
        
    }

    depositar(value){
        if(value <= 0) return 
        return this.#sale += value
    }

    transferir(value, conta){
        const newSale = this.sacar(value)
        conta.depositar(newSale)
    }
}