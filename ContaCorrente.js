import { Client } from "./Cliente.js";

export class ContaCorrente {
    static accounts = 0;

    #client
    #sale



    set client(newValue) {
        if (newValue instanceof Client) {
            this.#client = newValue;
        }
    }

    get client() {
        return this.#client;
    }

    get sale() {
        return this.#sale;
    }

    constructor(agency, client) {
        this.agency = agency;
        this.client = client;
        this.#sale = 0;
        ContaCorrente.accounts += 1;
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