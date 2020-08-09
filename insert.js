var studentArray = [];
var count=0;
var button = document.getElementById("submit");
button.addEventListener("click", function () {
  var FirstName = document.getElementById("FirstName");
  var LastName = document.getElementById("LastName");
  var Email = document.getElementById("Email");
  var skills = document.getElementsByName("skills");
  var branch = document.getElementsByClassName("branch");
  var gender = document.getElementsByName("gender");
  // if (FirstName.value == "") {
  //   FirstName.style.border = " 1px solid red";
  // }
  //  if (LastName.value=="") {
  //    LastName.style.border = " 1px solid red";

  //  }
  //  if (Email.value == "") {
  //  Email.style.border = " 1px solid red";

  // }

  // if(!gender.checked){
  //   document.getElementById("gender").innerHTML=
  //   "this fielde is compulsory";
  // }
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked)
      var gendervalue = gender[i].value;
  }
  var skillsvalue = " ";
  for (var i = 0; i < skills.length; i++) {
    if (skills[i].checked)
      skillsvalue = skillsvalue + " " + skills[i].value;
  }
  for (var i = 0; i < branch.length; i++) {
    if (branch[i].selected)
      var branchvalue = branch[i].value;
  }
count=count+1;
  var StudentObj = {
    countii:count,
    fname: FirstName.value,
    lname: LastName.value,
    email: Email.value,
    gender: gendervalue,
    skills: skillsvalue,
    branch: branchvalue
  }
  localStorage.setItem("StudentObj", JSON.stringify(StudentObj));
  var jsonstring = localStorage.getItem("StudentObj");
  var retobj = JSON.parse(jsonstring);
  if (FirstName.value != "" && LastName.value != "" && Email.value != "") {
    studentArray.push(retobj);
  }
 
  var text = " ";
  

  for (var i = 0; i < studentArray.length; i++) {
    text += "<tr>" +
     "<td>" + studentArray[i].countii + "</td>" +
      "<td>" + studentArray[i].fname + "</td>" +
      "<td>" + studentArray[i].lname + "</td>" +
      "<td>" + studentArray[i].email + "</td>" +
      "<td>" + studentArray[i].gender + "</td>" +
      "<td>" + studentArray[i].skills + "</td>" +
      "<td>" + studentArray[i].branch + "</td>" +
      "<td>" + '<button class="edit" onclick="edit(this)">' + "edit" + "</button>" +
      '<button class="delete"  onclick="deleterow(this)">' + "delete" + "</button>" + "</td>" +
      "</tr>";

  }
  document.getElementById("tb").innerHTML = text;
  
});


 function deleterow(td) {
  td=event.target.parentNode;//to get clicked elemnet of parent
  var tr=td.parentNode;
  tr.parentNode.removeChild(tr);
  }

   
function edit(td) {
  var skills = document.getElementsByName("skills");
  selectrow=td.parentElement.parentElement;
  document.getElementById("FirstName").value=selectrow.cells[1].innerHTML;
   document.getElementById("LastName").value=selectrow.cells[2].innerHTML;
  document.getElementById("Email").value=selectrow.cells[3].innerHTML;
skills.value=selectrow.cells[5].innerHTML;
document.getElementsByClassName("branch").value=selectrow.cells[6].innerHTML;
console.log(selectrow.cells[4].innerHTML);
 
    
  }

