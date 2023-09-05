// Duck Typing = O tipo não importa, o que importa é se o objeto consegue executar o método que eu desejo

export class authSystem {
    static login(authenticable, password){
        if(authSystem.isAuthenticator(authenticable)){
            return authenticable.authenticator(password) 
        }
        return false
    }

    static isAuthenticator(authenticable){
        return "authenticator" in authenticable && authenticable.authenticator instanceof Function
    }
}