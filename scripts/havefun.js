let myArray=['a','b','c','d','e'];
let myNewString = myArray.toString();//"a,b,c,d,e"
console.log(myNewString);
let button1=document.querySelector("#button1");

button1.onclick=function(){
    if(button1.style.backgroundColor!='aqua'){
        button1.style.backgroundColor='aqua';
    }
    else{
        button1.style.backgroundColor="red";
    }
};