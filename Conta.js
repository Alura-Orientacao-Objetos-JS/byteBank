export class Account{
    _sale
    #client
    agency

    constructor(saleInit, client, agency) {
        this._sale = saleInit;
        this.#client = client;
        this.agency = agency;
    }

    set client(newValue) {
        if (newValue instanceof Client) {
            this.#client = newValue;
        }
    }

    get client() {
        return this.#client;
    }

    get _sale() {
        return this._sale;
    }

    sacar(value) {
        let tax = 1
        return this._sacar(value, tax)
    }

    _sacar(value, tax){
        const newValue = tax * value;
        if (this._sale >= newValue) {
            this._sale -= newValue;
            return newValue;
        }
        return 0
    }

    depositar(value) {
        if (value <= 100) {
            return;
        }
        this._sale += value;
    }
    
    transferir(value, conta) {     
        const newValue = this.sacar(value);
        conta.depositar(newValue);
    }
}