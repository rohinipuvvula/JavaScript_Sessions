var Name=function(){
    var f=document.getElementById("fname").value;
    var l=document.getElementById("lname").value;
    var age=document.getElementById("age").value;
    alert(`${f} ${l}!! ${getStatus(age)}`)
}

function getStatus(age){
    if(age>18){
        return 'you\'re valid to travel'
    }
    else{
        return 'you can\'t travel'
    }
}