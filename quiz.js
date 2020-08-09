var quizarray = [];
var count = 0;
document.getElementById("nextbtn").addEventListener("click", function () {
  var mcq1 = document.getElementById("mcq1");
  var mcq2 = document.getElementById("mcq2");
  var mcq3 = document.getElementById("mcq3");
  var quizobj = {
    question1: mcq1.textContent,
    question2: mcq2.textContent,
    question3: mcq3.textContent
  }

  quizarray.push(quizobj);

  count = count + 1;
  if (count == 1) {
    mcq2.style.display = "block";
    mcq1.style.display = "none";
    mcq3.style.display = "none";
  }
  if (count == 2) {
    mcq2.style.display = "none";
    mcq1.style.display = "none";
    mcq3.style.display = "block";
    
  }
  if (count == 3) {
    document.getElementById("resultcontainer").style.display=
    "block";
    mcq3.style.display = "none";
    document.getElementById("nextbtn").style.display = "none";
    
  }



  
})

function answersec() {
  

}
var countresult = 0;
function resultfun() {
  
  document.getElementById("mcq1").style.display = "none";
  document.getElementById("mcq2").style.display = "none";
  document.getElementById("mcq3").style.display = "none";
  
  document.getElementById("nextbtn").style.display = "none";
  var q1a = document.getElementById("q1a");
  if (q1a.checked) {
    countresult += 1;
  }
  var q2c = document.getElementById("q2c");
  if (q2c.checked) {
    countresult += 1;
  }
  var q3a = document.getElementById("q3a");
  if (q3a.checked) {
    countresult += 1;
  }
  var emoji = String.fromCodePoint(0x1F60A);
  document.getElementById("resultdemo").innerHTML = "your quiz score is:" + countresult + "/3" + "<br><br>" +
    "thank you for attending the quiz" + " " + emoji;
    document.getElementById("view").style.display="block";

}
document.getElementById("start").addEventListener("click", function () {
   document.getElementById("start").style.display="none";
   document.getElementById("slide-show").style.display="block";
 });
 var viewarray=[]
 function viewdemo(){
  document.getElementById("resultcontainer").style.display="none";
  var mcq1=document.getElementById("q1a");
  var mcq2=document.getElementById("q2c");
  var mcq3=document.getElementById("q3a");

  var q1=document.getElementsByClassName("q1");
  var q2=document.getElementsByClassName("q2");
  var q3=document.getElementsByClassName("q3");
  for(var i=0;i<q1.length;i++){
    if(q1[i].checked){
     var q1value=q1[i].value;
    }
  }
  for(var i=0;i<q2.length;i++){
    if(q2[i].checked){
     var q2value=q2[i].value;
    }
  }
  for(var i=0;i<q3.length;i++){
    if(q3[i].checked){
     var q3value=q3[i].value;
    }
  }


  var demo1=document.getElementById("demo1");
  demo1.style.display="block";
  var demo2=document.getElementById("demo2");
  demo2.style.display="block";
  var demo3=document.getElementById("demo3");
  demo3.style.display="block";
  var rihtmark=String.fromCodePoint(0x2705);
  var crossmark=String.fromCodePoint(0x274c);
    if(mcq1.checked){
    demo1.innerHTML=1.+"your answer:"+q1value+"<br>"+"correct answer"+" "+mcq1.value+rihtmark;
  }
  else{

    demo1.innerHTML=1.+"&nbsp;"+"your answer:"+"  "+ q1value+"<br>"+"correct answer"+" "+mcq1.value+crossmark;
  }
  if(mcq2.checked){
    demo2.innerHTML=2.+"your answer:"+"  "+ q2value+"<br>"+"correct answer"+" "+mcq2.value+rihtmark;
  }
  else{

    demo2.innerHTML=2.+"&nbsp;"+"your answer:"+"  "+ q2value+"<br>"+"correct answer"+" "+mcq2.value+crossmark;
  }
  if(mcq3.checked){
    demo3.innerHTML=3.+"your answer:"+"  "+ q3value+"<br>"+"correct answer"+" "+mcq3.value+rihtmark;
  }
  else{

    demo3.innerHTML=3.+"&nbsp;"+"your answer:"+"  "+ q3value+"<br>"+"correct answer"+" "+mcq3.value+crossmark;
  }
 
 }