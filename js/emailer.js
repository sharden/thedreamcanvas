$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("WZaCRnqJAEjk2tV3zwlvmvZJo2xsp7NXtza9p7ad", "CdcpXd9TJ0swt9kEFNYz25LxzyM64QwkrUK2Ar55");

  // Setup the form to watch for the submit event
  $('#contactForm').submit(function(e){
    e.preventDefault();
    

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      fname: $('#fname').val(), 
      lname: $('#lname').val(),
      company: $('#company').val(),
      email: $('#email').val(),
      message: $('#message').val(),
      tag: $('#tag').val(),
      env: $('#userAgent').val(navigator.userAgent)
    }
    
    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#contactForm').find(':text, textarea').val('');
        $('#contactForm').find('#tag').val('CONTACT');
        //$('#response').html('Email sent!').addClass('success').fadeIn('fast');
        $('#modal-success').modal('show');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
      }
    });
  });
  
  // Setup the form to watch for the submit event
  $('#partnerForm').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      fname: $('#fname').val(), 
      lname: $('#lname').val(),
      company: $('#company').val(),
      email: $('#email').val(),
      message: $('#message').val(),
      tag: $('#tag').val()
    }
    
    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#partnerForm').find(':text, textarea').val('');
        $('#partnerForm').find('#tag').val('PARTNER');
        //$('#response').html('Email sent!').addClass('success').fadeIn('fast');
        $('#modal-success').modal('show');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
      }
    });
  });

});