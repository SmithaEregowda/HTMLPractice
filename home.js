var database=[{
     username:"smitha",
     password:"123"
},
{
    username:"mahii",
    password:"234"
},
{
    username:"chii",
    password:"456"
}];

var comments=[
    {
        username:"vinu",
        timeline:"hi smitha how are you!!"
    },
    {
        username:"kushi",
        timeline:"hiii   smith"
    }
];
 var userp=prompt("enter username");
 var passp=prompt("enter password");
 function valid(username,password){
    for(var i=0;i<database.length;i++){
        if(database[i].username===username &&
        database[i].password===password){
                return true;
            }
 }   
 return false;
}
 
 function signin(username,password)
 {
    if(valid(username,password))
    {
        console.log(comments);
    }
    else{
    alert("soryy!!")
    }  
 }
 signin(userp,passp); 