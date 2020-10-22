//DEFAULT
function name(fn,ln='Black'){
    console.log(`Hello ${fn} ${ln}`)
}
name('Sirius')
name("Severus",'Snape')
//rest
function add(...numbers){
    var total=0;
    for(var a of numbers){
        total=total+a;
    }
    console.log(total)
}

add(10,2,3,1,4,5,6)
add(10,20)
//spread
console.log("--------------------")
var odd=[1,3,5,7]
var even=[2,4,6,8]
var comb=[...odd,...even]
console.log(comb)