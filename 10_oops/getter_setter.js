class User{
    constructor(email,password){
        this.email = email;
        this.password =  password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    // get password(){
    //     return `${this._password}knnnhh`
    // }
    set password(value){
        this._password = value
    }
}

const knnhhh = new User("h@knnnnhhh.ai","123")
console.log(knnhhh.password)
console.log(knnhhh.email)