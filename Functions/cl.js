function outerFun(){
    var count=document.getElementById("num").value;
    function innerFun(){
        document.write(`${count}`)
    }
    return innerFun
}

var c=outerFun()
c();
