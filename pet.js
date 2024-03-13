$(".txtb input").on("focus",function(){ $(this).addClass("focus"); });

     //Validation d'un Email
    function Check() {
     var mail = document.getElementById("user").value;
     var rg=/^[a-zA-Z0-9_]+@[a-z]+\.[a-z]{2,4}$/g;
     var b=rg.test(mail);
     if(b) {
         //show the Message true
        document.getElementById("user-OK-msg").innerText="Mail is valid";
        document.getElementById("user-error-msg").innerText="";
        document.getElementById("user-warn-msg").innerText="";
        //Show style of Message true
        var x=document.querySelector("div:nth-child(3)");
        x.style.borderBottom="2px solid yellowgreen";
        x.style.transition=".5s";
         submitOK=true;
     }
     else {
         //show the Message false
        document.getElementById("user-error-msg").innerText="Mail is invalid!";
        document.getElementById("user-OK-msg").innerText="";
        document.getElementById("user-warn-msg").innerText="";
        //Show style of Message false
        var x=document.getElementById("userZone");
        x.style.borderBottom="2px solid red";
        x.style.transition=".5s";
        //Delete false value
        ClearMail(mail);
        submitOK=false;
      }    
    }
    function CheckNumber()
    {
      //validation d'un numero
      var rg=/^\+212[5-7][0-9]{8}$/g;
      var number=document.getElementById("number").value;
      var b=rg.test(number);

      if(b) {
        document.getElementById("number-OK-msg").innerText="Number is valid";
        document.getElementById("number-error-msg").innerText="";
        document.getElementById("number-warn-msg").innerText="";
        var n=document.getElementById("numberZone");
        n.style.borderBottom="2px solid yellowgreen";
        n.style.transition=".5s";
         submitOK=true;
     }
     else {
        document.getElementById("number-error-msg").innerText="Number is invalid!";
        document.getElementById("number-OK-msg").innerText="";
        document.getElementById("number-warn-msg").innerText="";
        var n=document.getElementById("numberZone");
        n.style.borderBottom="2px solid red";
        n.style.transition=".5s";
        ClearNumber(number);
        submitOK=false;
      }
      

    }
    //validation du mot de passe
    function CheckPassword() {
     var password = document.getElementById("password").value;
     var rg=/^[A-Z]{1,20}[a-z]{5,20}[0-9]{2,10}$/g;
     var b=rg.test(password);

     if(b) {
        document.getElementById("password-OK-msg").innerText="Password is Strong";
        document.getElementById("password-error-msg").innerText="";
        document.getElementById("password-warn-msg").innerText="";
        var p=document.getElementById("passwordZone");
        p.style.borderBottom="2px solid yellowgreen";
        p.style.transition=".5s";
         submitOK=true;
     }
     else {
        document.getElementById("password-error-msg").innerText="Password not Strong!"
        document.getElementById("password-OK-msg").innerText="";
        document.getElementById("password-warn-msg").innerText="";
        ClearPassword(password);
        var p=document.getElementById("passwordZone");
        p.style.borderBottom="2px solid red";
        p.style.transition=".5s";
        submitOK=false;
     }
    }
    function ResetForm() {
  document.getElementById("frm1").reset();    
  ResetUser();
  ResetNumber();
  ResetPassword();   
}
function ClearMail(mail) {
    var mail='';
    document.getElementById("user").value='';
    document.getElementById("user").value='';

}
function ClearNumber(number) {
    var number='';
    document.getElementById("number").value='';
}
function ClearPassword(password) {
    var password='';
    document.getElementById("password").value='';
}
function BlurUser() {
    var blur=document.getElementById("user");
    blur.className="";
    var mail = document.getElementById("user").value;
     var rg=/^[a-zA-Z0-9_]+@[a-z]+\.[a-z]{2,4}$/g;
     var b=rg.test(mail);
    var move=document.getElementById("userspan");
    if(b)
    {
      move.style.transition=".5s";
      move.style.opacity="0%";  
    }
    else {
        move.style.transition=".5s";
        move.style.opacity="100%";   
    }
}
function BlurNumber() {
    var blur=document.getElementById("number");
    blur.className="";
      var rg=/^\+212[5-7][0-9]{8}$/g;
      var number=document.getElementById("number").value;
      var b=rg.test(number);
    var move=document.getElementById("numberspan");
    if(b)
    {
      move.style.transition=".5s";
      move.style.opacity="0%";  
    }
    else {
        move.style.transition=".5s";
        move.style.opacity="100%";   
    }
}
function BlurPassword() {
    var blur=document.getElementById("password");
    blur.className="";
     var password = document.getElementById("password").value;
     var rg=/^[A-Z]{1,20}[a-z]{5,20}[0-9]{2,10}$/g;
     var b=rg.test(password);
    var move=document.getElementById("passwordspan");
    if(b)
    { 
      move.style.transition=".5s";
      move.style.opacity="0%";  
    }
    else {
        move.style.transition=".5s";
        move.style.opacity="100%";   
    }
}
function ResetUser() {
    var x=document.querySelector("div:nth-child(3)");
        x.style.borderBottom="2px solid #adadad";
        x.style.transition="all 1s ease-in-out";
    document.getElementById("user-OK-msg").innerText="";
        document.getElementById("user-error-msg").innerText="";
        var moveUser=document.getElementById("userspan");
      moveUser.style.transition=".5s";
      moveUser.style.opacity="100%";  

}
function ResetNumber() {
    var n=document.getElementById("numberZone");
        n.style.borderBottom="2px solid #adadad";
        n.style.transition="all 1s ease-in-out";
        document.getElementById("number-OK-msg").innerText="";
        document.getElementById("number-error-msg").innerText="";
      var Numbermove=document.getElementById("numberspan");
      Numbermove.style.transition=".5s";
      Numbermove.style.opacity="100%";  
    
}
function ResetPassword() {
    var p=document.getElementById("passwordZone");
        p.style.borderBottom="2px solid #adadad";
        p.style.transition="all 1s ease-in-out";
        document.getElementById("password-OK-msg").innerText="";
        document.getElementById("password-error-msg").innerText="";
        var Passwordmove=document.getElementById("passwordspan");
      Passwordmove.style.transition=".5s";
      Passwordmove.style.opacity="100%";    
}
function NoFocus() {
    if(document.getElementById("user").value="")
    {
        var p=document.document.getElementById("user");
        p.style.borderBottom="2px solid #adadad";
        p.style.transition="all 1s ease-in-out";
        document.getElementById("password-OK-msg").innerText="";
        document.getElementById("password-error-msg").innerText="";
    }
}
function Warning()
{
    if(document.getElementById("user").value=="")
    {
        var yy=document.getElementById("userspan");
        yy.style.background="none";
        yy.style.height="0px";
        yy.style.display="none";

        


        var x=document.querySelector("div:nth-child(3)");
        x.style.borderBottom="2px solid orange";
        x.style.transition=".5s";
        document.getElementById("user-warn-msg").innerText="Insert Your Mail";
        var xy=document.getElementById("user-warn-msg");
        xy.style.transition=".5s";
        document.getElementById("user-error-msg").innerText="";
        document.getElementById("user-OK-msg").innerText="";

      }
      if(document.getElementById("number").value=="")
    {
        var yy=document.getElementById("numberspan");
        yy.style.background="none";
        yy.style.height="0px";
        yy.style.display="none";

        
        var n=document.getElementById("numberZone");;
        n.style.borderBottom="2px solid orange";
        n.style.transition=".5s";
        document.getElementById("number-warn-msg").innerText="Insert Number";
        var xy=document.getElementById("number-warn-msg");
        xy.style.transition=".5s";
        document.getElementById("number-error-msg").innerText="";
        document.getElementById("number-OK-msg").innerText="";

      }
      if(document.getElementById("password").value=="")
    {
        var yy=document.getElementById("passwordspan");
        yy.style.background="none";
        yy.style.height="0px";
        yy.style.display="none";

        var p=document.getElementById("passwordZone")
        p.style.borderBottom="2px solid orange";
        p.style.transition=".5s";
        document.getElementById("password-warn-msg").innerText="Insert Password";
        var xy=document.getElementById("password-warn-msg");
        xy.style.transition=".5s";
        document.getElementById("password-error-msg").innerText="";
        document.getElementById("password-OK-msg").innerText="";

      }
}
    