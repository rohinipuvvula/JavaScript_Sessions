
//creating close button
var list= document.getElementsByTagName('li')
var i
for(i=0;i<list.length;i++){
    var span=document.createElement('span')
    var text=document.createTextNode('\u00D7')
    span.appendChild(text)
    span.className="close"
    list[i].appendChild(span)
}

//functionality of close button
var close=document.getElementsByClassName('close')
var i
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display='None'
    }
}



function newTodo(){
    var inputval=document.getElementById("myInput").value;
    var text=document.createTextNode(inputval)
    var li=document.createElement('li')
    li.appendChild(text)
    if(inputval===''){
        alert('you must write something')
    }
    else{
    document.getElementById('myList').appendChild(li)
    document.getElementById('myInput').value=''
    //alert("You clicked me!!"+inputval)
    }
    var span=document.createElement('span')
    var text=document.createTextNode('\u00D7')
    span.appendChild(text)
    span.className="close"
    li.appendChild(span)
    for(i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display='None'
        }
    }
}

function removeAll(){
    var list=document.getElementsByTagName('ul')
    list[0].innerHTML=" ";
}