var loginArray=[];
var button=document.getElementById("submit");
button.addEventListener("click",function(){
username=document.getElementById("user");
password=document.getElementById("pass");
var loginobj={
    username:username.value,
    password:password.value
}
localStorage.setItem("loginobj",JSON.stringify(loginobj));
loginstring=localStorage.getItem("loginobj");
retobj=JSON.parse(loginstring);
loginArray.push(retobj);
document.getElementById("demo").innerHTML=retobj;

});