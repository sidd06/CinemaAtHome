 /**var toggle_visibility=function(id1,id2){
	var getName = document.getElementById("nam").value;
	var beforeLogin = document.getElementById(id1);
	var afterLogin = document.getElementById(id2);
	if ((beforeLogin.style.display=="block")&&(afterLogin.style.display=="none")){
		beforeLogin.style.display="none";
		afterLogin.style.display="block";
		document.getElementById("logname").innerHTML="Hi " + getName;
	}else {
		afterLogin.style.display="none";
		beforeLogin.style.display="block";
	}
}**/

 /**function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block'){
          e.style.display = 'none';
         }
       else{
          e.style.display = 'block';
         }
   };
 
$(document).ready(function() {
	$("#log").click(function(){
		$("#beforeLogin").fadeOut();
		$("#logname").text(function(){return "Hi "+$("#nam").val();});
	$("#afterLogin").fadeIn();
  });
  
  $("#logout").click(function() {
  	$("#afterLogin").fadeOut();
  	$("#beforeLogin").fadeIn();
  });	
 }); **/

$(document).ready(function() {
  $('#register-form').validate(
  {
    rules: {
      firstname: {
        minlength: 2,
        required: true
      },
      lastname: {
        minlength: 2,
        required: true
      },
      pass: {
        minlength: 2,
        required: true
      },
      email: {
        required: true,
        email: true
      },
      textarea: {
          minlength: 2,
          required: true
      }
  }
    /**  highlight: function(element) {
      $(element).closest('.control-group').addClass('error'); // add the Bootstrap error class to the control group
    },
    success: function(element) {
      $(element).closest('.control-group').removeClass('error'); // remove the Boostrap error class from the control group
    }**/
    
  });
});

$(document).ready(function(){
    $("#login-form").validate({
        rules: {
            email:{
                required :true,
                email :true
            },
            pass : "required"
        }
    });
});

$(document).ready(function() {
  jQuery.validator.setDefaults({
    errorPlacement: function(error, element) {
      // if the input has a prepend or append element, put the validation msg after the parent div
      if(element.parent().hasClass('input-prepend') || element.parent().hasClass('input-append')) {
        error.insertAfter(element.parent());		
      // else just place the validation message immediatly after the input
      } else {
        error.insertAfter(element);
      }
    },
    
    highlight: function(element) {
      $(element).closest('.control-group').addClass('error'); // add the Bootstrap error class to the control group
    },
    success: function(element) {
      $(element).closest('.control-group').removeClass('error'); // remove the Boostrap error class from the control group
      $.ajax({
          url:"dbAccess.php",
          type:"post",
          data:String,
          datatype:String,
          success:function(data){
              
          }
      });
    }
  });
});




