
var formdata = {
    name: ""
            
};











//Register form controls
$(document).ready(function(){


		$('#register-form').validate({
                    rules: {
                    firstname: {
                        required: true,
                        minlength: 2
                    },
		  
                    lastname: {
                        minlength: 2,
                        required: true
                    },
		  
                    pass: {
			required: true,
			minlength: 6
                    },
                    confirm_password: {
			required: true,
			minlength: 6,
			equalTo: "#password"
			},
		  
                    email: {
                        required: true,
                        email: true
                        },
		  
	     
		   textarea: {
                        minlength: 10,
                        required: true
                        },
		  
                    agree: "required"
		  
                    },
                    highlight: function(element) {
				$(element).closest('.control-group').addClass('error');
			},
                    success: function(element) {
				element.closest('.control-group').removeClass('error');
                        },
                    submitHandler: function(form){
                            
                                $(form).ajaxSubmit({
                                        url:'php/dbAccess.php',
                                        type: 'GET',
                                        success:function(data){
                                            $("#beforeLogin").fadeOut();
                                            $("#register").modal('hide');
                                            $("#logname").text(function(){return "Hi "+data;});
                                            $("#afterLogin").fadeIn();
                                        }
  
                                         });
                              
                                
                           
                        }
	  });
      });// end document.ready

//Login form controls
$(document).ready(function(){
    $('#login-form').validate({
        rules: {
            loginemail:{
                required :true,
                email :true
            },
            loginpass: "required"
        },
        highlight: function(element) {
		$(element).closest('.control-group').addClass('error');
			},
	success: function(element) {
		element.closest('.control-group').removeClass('error');
                
			},
        submitHandler: function(form){
                            
                                $(form).ajaxSubmit({
                                        url:'php/loginFormAccess.php',
                                        type: 'GET',
                                        success:function(data){
                                            
                                            if(data==="Login and Password mismatch"){
                                                $("#dberror").text(function(){return data;});
                                            }else{
                                            $("#beforeLogin").fadeOut();
                                            $("#logname").text(function(){return "Hi "+data;});
                                            $("#afterLogin").fadeIn();
                                            }
                                            $("#loginform").modal('hide');
                                        }
  
                                         });
                              
                                
                           
                        }                
    });
});


$(document).ready(function(){
    $("#logout").click(function() {
        $("#afterLogin").fadeOut();
  	$("#beforeLogin").fadeIn();
    });
});


