// function openExplain(){
//     // alert("openExplain called..")
//     element=document.getElementById("con")
//     element.style.display='block'
// }

var openExplain=()=>{
    element=document.getElementById("con")
    element.style.display='block'

}
// function closeExplain(){
//     // alert("closeExplain called")
//     element=document.getElementById('con')
//     element.style.display='none'
// }

var closeExplain=()=>{
    element=document.getElementById('con')
    element.style.display='none'
}
// function doOver(element){
//     //alert("doOver called")
//     document.getElementById("image").innerHTML=element.alt;

// }

var doOver=(element)=> document.getElementById("image").innerHTML=element.alt;
// function doOut(element){
//     //alert("doOut called")
//     document.getElementById('image').innerHTML="hover over the image to display here.."

// }
var doOut=(element)=>document.getElementById('image').innerHTML="hover over the image to display here.."