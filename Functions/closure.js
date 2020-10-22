function counter(){
    var c=0;
    function increaseCounter(){
        return c+=1
    }
    return increaseCounter;
}
var c=counter();
console.log(c())
// console.log(count())
// console.log(count())
console.log(c())
console.log(c())