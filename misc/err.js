// try{
//     AudioDestinationNode(100,200)
// }catch(ex){
//     console.log("error")
// }finally{
//     console.log("always executed")
// }

var age=28;
try{
    if(age>=18){
        console.log("you're eligible to vote")
    }
    else{throw{
        code:101,
        message: 'you\'re not eligible to vote'
    }
       
    }
}catch(ex){
    console.log("there is an error")
    console.log(ex.code+':'+ex.message)

}finally{
    console.log("block gets executed anyway")
}