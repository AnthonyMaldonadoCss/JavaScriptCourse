/**
 * Execercise Video: Object methods
 */

const Anthony = {
    firtsName: 'Anthony',
    lastName: 'Maldonado',
    yearOfBirth: 1995,
    job: 'Web developer',
    friends: ['Heczaid', 'Ricardo', 'Edinson'],
    hasDriverLicence: true,

    calcAge: function () {
        this.age = 2037 - this.yearOfBirth;
        return this.age;
    },

    // calcAge: function () {
    //     this.age = 2021 - this.yearOfBirth
    //     return this.age
    // },

    // calcAge: function () {: fun
    // return 2021 - this.yearOfBirth
    // },

    fullString: function () {
        let driver = this.hasDriverLicence === true;

        this.fullMessage = `${this.firtsName} is a ${this.age} years old, ${this.job}. ${this.hasDriverLicence ? 'a' : 'not'} driver licence`;
        return this.fullMessage
    }
};

console.log(Anthony.calcAge())
console.log(Anthony.fullString())


