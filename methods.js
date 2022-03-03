alert = console.log;
var Person = function (name, age){

    this.name = name;
    this.age = age;

    this.sayHi = function(){
        alert('hello!');
    }
}

Person.sayName = function() {
    alert("I am a Person object :)");  
};

// instance method; 
Person.prototype.setName = function(nameIn) {
    this.name = nameIn;  
}

var per = new Person('John Doe', 22);
console.log(per);

Person.sayName();

per.sayHi();

per.setName('john');

