export class Account{
    _sale
    _client
    agency

    constructor(saleInit, client, agency) {
        if(this.constructor == Account){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta, pois ela é uma classe abstrata")
        }
        this._sale = saleInit
        this._client = client
        this.agency = agency
    }

    set client(newValue) {
        if (newValue instanceof Client) {
            this._client = newValue
        }
    }

    get client() {
        return this._client
    }

    get _sale() {
        return this._sale
    }

    // Método Abstrato
    sacar(value){
        throw new Error("O método sacar da conta é abstrato")
    }

    _sacar(value, tax){
        const newValue = tax * value;
        if (this._sale >= newValue) {
            this._sale -= newValue
            return newValue
        }
        return 0
    }

    depositar(value) {
        if (value  <= 0) {
            return
        }
        this._sale += value
    }
    
    transferir(value, conta) {     
        const newValue = this.sacar(value)
        conta.depositar(newValue)
    }
}