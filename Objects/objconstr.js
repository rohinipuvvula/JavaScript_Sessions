//class in js
function Person(fName,lName){
    this.firstname=fName || 'will'
    this.lastname=lName || "wilkins"
    Object.defineProperties(this,{
        "Firstname":{
            get:function(){return this.firstname},
            set:function(value){this.firstname=value}
        }

    })
}
var p= new Person()
console.log(p.Firstname)
p.Firstname="the wise"
console.log(p.Firstname)

//bhawna
// function Person(fName, lName) {
//     this.firstName = fName || 'Unknown';
//     this.lastName = lName || 'Unknown';
//     Object.defineProperties(this, {
//         "FirstName": {
//             get: function () { return this.firstName },
//             set: function (value) { this.firstName = value }
//         }
//     })
// }


// var p1 = new Person();
// console.log(p1.FirstName);
// p1.FirstName = "Bhawna";
// console.log(p1.FirstName);

//creating obj constructor
// var p=new Person()
// console.log(p.fn)
// console.log(p["ln"])
// console.log(p.getName())

// var p1=new Person('abc','def')
// var p2=new Person('jkl','uio')
// var p3=new Person('tre','gfd')
// console.log(p1.getName())
// console.log(p2.getName())
// console.log(p3.fn)
// console.log(p3["lName"])
// var p4=new Person()
// console.log(p4.getName())