// defining a class
class User {

    constructor(public firstName: string, public lastName: string, public isOnline: boolean, public age: number, private birthday: number, private friends: number, public followedBy: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isOnline = isOnline;
        this.age = age;
        this.birthday = birthday;
        this.friends = friends;
        this.followedBy = followedBy;

    }// end constructor

    //getters
    getBirthday = () => {
        return this.birthday
    }
    getFriends = () => {
        return this.friends
    }

    //setters
    setBirthday = (date: number) => {
        return this.birthday = date;
    }
    setFriends = (number: number) => {
        return this.friends = number;
    }

}// end class 


let pratik = new User('pratik', 'pawar', true, 26, 1523074955, 786, 29)
let akshay = new User('akshay', 'patil', false, 23, 1523074955, 546, 28)

//set new values
console.log("akshay's old birthdate", akshay.getBirthday())
let newBirthdate = akshay.setBirthday(1123076539)
console.log("akshay's new birthdate", newBirthdate)

console.log("pratik's old friends count", pratik.getFriends())
let newFriedns = pratik.setFriends(877)
console.log("pratik's new friend count", newFriedns)