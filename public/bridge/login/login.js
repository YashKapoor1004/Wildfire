/*!
 * Float.js v1
 * https://sangramjagtap.github.io/Float.js/
 * https://codepen.io/sangramjagtap/pen/pyPdPb
 * Licensed MIT © Sangram Jagtap
 */

$(document).ready(function(){
    function floatLabel(event){
      var input=$(this);
        var val=$.trim(input.val());
          input.parent().addClass("float-active");
          $(this).siblings().each(function() {
           if(val!="") 
           {
               if($(this).hasClass('first_label'))
                {
                  $(this).addClass("inactive_label");
                  $(this).removeClass("active_label");    		  
                }  
                else if($(this).hasClass('inactive_label'))
                {
                  $(this).addClass("active_label");
                  $(this).removeClass("inactive_label");    		  
                }
           }
           else
           {
              if($(this).hasClass('first_label'))
                {
                  $(this).addClass("active_label");
                  $(this).removeClass("inactive_label");    		  
                }  
                else
                {
                  $(this).addClass("inactive_label");
                  $(this).removeClass("active_label");    		  
                } 
           }
           });
    }
    function floatBack(event){
      var input=$(this);
        var val=input.val();
        if(val!="")
          input.parent().addClass("float-active");
        else
          input.parent().removeClass("float-active");   
    } 
    $(".float input").keyup(floatLabel);
    $(".float input").focus(floatLabel);
    $(".float input").blur(floatBack);
    $(".float input").change(floatLabel);
  });

  function logIn(){
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    console.log(email)
    console.log(password)
    auth.signInWithEmailAndPassword(email, password)
    .then(function(value){
        alert('You Are Logged In!')
        window.location.href("/dashboard");
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}
  