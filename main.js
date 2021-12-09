
var users = [           // this is the array where I store all users data
    {name:"Sahbi",
    lastname:"Hammemi",
    gender:"male",
    personalitycounter:15
    },
    
    {name:"Samir",
    lastname:"Grira",
    gender:"male",
    personalitycounter:31
    },
    
    {name:"Amira",
    lastname:"Shemi",
    gender:"female",
    personalitycounter:18
    },
    
    {name:"Farah",
    lastname:"doggui",
    gender:"female",
    personalitycounter:28
    },
    {name:"Mohammed",
    lastname:"arbi",
    gender:"male",
    personalitycounter:15
    },
    
    {name:"Ihsen",
    lastname:"benzarti",
    gender:"male",
    personalitycounter:38
    },
    
    {name:"Khadija",
    lastname:"assaf",
    gender:"female",
    personalitycounter:33
    },
    
    {name:"Marwa",
    lastname:"mejid",
    gender:"female",
    personalitycounter:28
    }
]

// I am hiding the other divs instead of making to html pages
  $(".questionpage").hide();
   $(".resultpage").hide();  

var boxvalue=$(".mca:checked").val() 
var gendre=$("#gendre").val()
var names=$("#name").val()
var myArr=[]
var mypersonalitycounter = users[users.length-1].personalitycounte


function makeUser(){  //Function to add users information in an object and then store them in an array
    var obj={}    //so i can use'em later 
    obj.name=$("#name").val()
    obj.gender=$("#gendre").val()
    obj.personalitycounter=0
    obj.active=false
  
users.push(obj)
// console.log(users)
 return obj
}

$("#btnsignup").click(function(){
  this.name=$("#name").val()
  this.gender=$("#gender").val()
  this.active=true
  var nemail=$("#emailN").val()
  var npassword=$("#passwordN").val()
  myArr.push(nemail)
  myArr.push(npassword)
  makeUser()

//   if($("#gender").val()==="Male"){guyz.push(obj)}
//   else girls.push(obj)

})

$("#btnsignin").click(function () { //This is the signin button which it will change the status to online
    var semail=$("#email").val()    //it will hide the first div and pops the correct one
    var spassword=$("#password").val()
    var itshim = false 
    for(var i=0;i<myArr.length;i++){
        if (semail===myArr[i]){
          itshim = true
      users[users.length-1].active=true
  }} 
    if(itshim === true ){
        $(".loginpage").hide(); 
        $(".questionpage").show()
    }
    else{
        alert("Wrong Credentials! please try again!")
    }});


    $("#ss").click(function () {    //this is the submit button which it will submit your answers and 
   for(var i =0; i<users.length;i++){   // count its values 
        users[users.length-1].personalitycounter= users[users.length-1].personalitycounter +parseInt( $(".mca:checked")[i].value )
       $(".questionpage").hide()
       $(".resultpage").show()
     }
    });
   
    
    
    var getMatches=users.filter(function(array){ return array.personalitycounter>users[users.length-1].personalitycounter})

    function display (getMatches){
    var concat=" "
    if(getMatches.length===1){return concat+getMatches[0].name+ " "+ getMatches[0].lastname}
    else return getMatches[0].name +" "+getMatches[0].lastname+ "  "+display(getMatches.slice(1))
    
}
// $("#finally").click(display())










