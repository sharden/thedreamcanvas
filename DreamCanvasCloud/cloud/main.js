// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("your_sendgrid_username", "your_sendgrid_password");
 
  var fname = request.params.fname;
  var lname = request.params.lname;
  var email = request.params.email;
  var company = request.params.company;
  var message = request.params.message;
 
  sendgrid.sendEmail({
   to: "hello@thedreamcanvas.co",
   from: email,
   fromname: fname+" "+lname,
   subject: "Message from DreamCanvas Website",
   text: "Name: "+fname+" "+lname+"\nCompany: "+company+"\nEmail: "+email+"\nMessage:\n\n"+message
   }, {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Thanks for contacting DreamCanvas Solutions!");
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
    }
  });
});
