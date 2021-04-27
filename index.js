const person = {

    firstName : "Ahasnul huq",
    lastName : "Shibu",
    age : 21,
    occation : "student",
    address : {

        home :"brahmanbaria",
        village : "chanrapur"
    },

    getBirthYear : function(){

        return 2021-this.age;
    }
}

let value;
value = person;

value = person.firstName;
value = person.lastName;
value = person.address.home;
value = person.address.village;
value = person.getBirthYear();

console.log(value);