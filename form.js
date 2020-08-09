
var button=document.getElementById("btn");
function validation(){
  
    var userfname=document.getElementById("userfname");
    var userlname=document.getElementById("userlname");
    var mid=document.getElementById("mid");
   var age=document.getElementById("age");
    if(userfname.value=="")
    {
    userfname.style.border="2px solid red";
    
    }
    if(userlname.value=="")
    {
        userlname.style.border="2px solid red";
    }
    if(mid.value.length<10){
       
        document.getElementById("demo1").innerHTML=
        "*please enter valid number";
    }

if(age.value<18)
{
   
    document.getElementById("demo").innerHTML=
    "*please enter valid age";
}


    
}
let formin=[];

function store(ev)
{
    ev.preventDefault();
    let forms={
         "userf":document.getElementById("userfname").value,
         "userl":document.getElementById("userlname").value,
         "mid":document.getElementById("mid").value,
       "age":document.getElementById("age").value
    }
formin.push(forms);
document.querySelector("form").reset();
console.warn('added',{formin});
var pre=document.querySelector("pre");
pre.textContent='\n'+JSON.stringify(formin,'\n',2);

}
button.addEventListener("click",store);