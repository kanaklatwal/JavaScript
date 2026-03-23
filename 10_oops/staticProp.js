class User{
   constructor(username){
      this.username = username
   }
   logMe(){
      console.log(`USername: ${this.username}`);
   }
   static createID(){
      return `123`
   }
}
const knnnn = new User("knnnn")
console.log(knnnn.createID());//123 // without static creteID

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createID());// static createID