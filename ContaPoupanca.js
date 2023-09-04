export class ContaPoupanca {
    #sale
    #client
    #agency

    constructor(saleInit, client, agency) {
        this.#sale = saleInit;
        this.#client = client;
        this.#agency = agency;
    }

    sacar(value) {
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

    tranferir(value, account) {

        const newValue = this.sacar(value);
        account.depositar(newValue);

    }
}