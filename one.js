let counter;

document.getElementById("button1").onclick = function(){
       counter-=1;
       document.getElementById("label1").innerHTML= counter;
}
document.getElementById("button2").onclick = function(){
    counter=0;
    document.getElementById("label1").innerHTML= counter;
}
document.getElementById("button3").onclick = function(){
    counter+=1;
    document.getElementById("label1").innerHTML= counter;
}


  