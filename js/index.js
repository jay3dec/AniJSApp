var animationHelper = AniJS.getHelper();

animationHelper.validateLogin = function(e, animationContext){
  var email = $('#txtLoginId').val();
  var pass = $('#txtLoginPass').val();
  if(email && pass){
    $('#spnLogin').html('Processing..');
  }
  else
    {
      $('#spnLogin').html('Fill Required fields.');
       animationContext.run();
    }
 
}

animationHelper.showReg = function(e, animationContext){
  $('#divLogin').hide();
  $('#divReg').show();
  animationContext.run();
  
}


animationHelper.showLogin = function(e, animationContext){
  $('#divReg').hide();
  $('#divLogin').show();
  animationContext.run();
 
}

animationHelper.validate = function(e, animationContext){
  var name = $('#txtName').val();
  var email = $('#txtEmail').val();
  var pass = $('#txtPassword').val();
  if(name && email && pass){
    $('#spnStatus').html("Processing...");
    setTimeout(function () {
      $('#spnStatus').html("");
    }, 2000);
  }
  else{
     $('#spnStatus').html("Fill required fields");
    animationContext.run();
  }
  
 
}