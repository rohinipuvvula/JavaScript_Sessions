// console.log('hello from java script console external')
// alert("hello there")

var age=prompt("enter your age here")
//alert("your age is"+age)
if(age>=18){
    //alert("You are eligible to vote")
    document.getElementById("votestatus").innerHTML='You\'re eligible to vote'
}
else{
    //alert("You can not vote")
    document.getElementById("votestatus").innerHTML="You cannot vote"
}
if(confirm("do you want to proceed??")==true){
    // alert("yayyy! you're in")
    document.getElementById("proceed").innerHTML='Yayyy! you\'re in!'
 
 }
 else{
    // alert("oops! can't proceed further")
    document.getElementById("proceed").innerHTML='Oops! can\'t proceed further'
 }
 