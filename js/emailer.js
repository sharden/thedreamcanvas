$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("WZaCRnqJAEjk2tV3zwlvmvZJo2xsp7NXtza9p7ad", "CdcpXd9TJ0swt9kEFNYz25LxzyM64QwkrUK2Ar55");

  // Setup the form to watch for the submit event
  $('#myForm').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      fname: document.getElementById('fname').value, 
      lname: document.getElementById('lname').value,
      company: document.getElementById('company').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }
    
    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('Email sent!').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
      }
    });
  });

});