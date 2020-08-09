var button = document.getElementById("user");
var input = document.getElementById("fid");
var ul = document.querySelector("ul");
button.addEventListener("click", function () {
    
    if(input.value.length>0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})
input.addEventListener("keypress", function (event) {
    console.log(event);
   // if(input.value.length>0 && keypress==13){
      //  var li = document.createElement("li");
        //li.appendChild(document.createTextNode(input.value));
        //ul.appendChild(li);
        //input.value = "";
    //}
})