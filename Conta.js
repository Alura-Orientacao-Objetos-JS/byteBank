export class Account{
    #sale
    #client
    #agency
    constructor(saleInit, client, agency) {
        this.#sale = saleInit;
        this.#client = client;
        this.#agency = agency;
    }

    sacar(value) {
        let taxa = 1.1 * value;
        if (this.#sale >= value) {
            this.#sale -= value;
            return value;
        }
    }

    depositar(value) {
        if (value <= 100) {
            return;
        }
        this.#sale += value;
    }

    tranferir(value, conta) {

        const newValue = this.sacar(value);
        conta.depositar(newValue);

    }
}