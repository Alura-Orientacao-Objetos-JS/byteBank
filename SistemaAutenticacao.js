export class authSystem {
    static login(authenticable, password){
        return authenticable.authenticator(password) 
    }
}