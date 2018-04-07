// defining a class
var User = /** @class */ (function () {
    function User(firstName, lastName, isOnline, age, birthday, friends, followedBy) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isOnline = isOnline;
        this.age = age;
        this.birthday = birthday;
        this.friends = friends;
        this.followedBy = followedBy;
        //getters
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getFriends = function () {
            return _this.friends;
        };
        //setters
        this.setBirthday = function (date) {
            return _this.birthday = date;
        };
        this.setFriends = function (number) {
            return _this.friends = number;
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.isOnline = isOnline;
        this.age = age;
        this.birthday = birthday;
        this.friends = friends;
        this.followedBy = followedBy;
    } // end constructor
    return User;
}()); // end class 
var pratik = new User('pratik', 'pawar', true, 26, 1523074955, 786, 29);
var akshay = new User('akshay', 'patil', false, 23, 1523074955, 546, 28);
//set new values
console.log("akshay's old birthdate", akshay.getBirthday());
var newBirthdate = akshay.setBirthday(1123076539);
console.log("akshay's new birthdate", newBirthdate);
console.log("pratik's old friends count", pratik.getFriends());
var newFriedns = pratik.setFriends(877);
console.log("pratik's new friend count", newFriedns);
