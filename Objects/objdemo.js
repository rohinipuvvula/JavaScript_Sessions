// //empty obj literal
// var person={};
// console.log(person)
// //obj with prop
// var person={
//     fn:'fred',
//     ln:'gudi'
// }
// console.log(person)
// console.log(person.fn)
// console.log(person.ln)
//obj literal with prop and methods
var person={
    fn:'fred',
    ln:'gudi',
    getFullName:function(){
        return `${this.fn} ${this.ln} `
    }

}
console.log(person)
console.log(person.fn)
console.log(person.ln)
console.log(person["fn"])
console.log(person["ln"])
console.log(person["age"])
console.log(person.getFullName())