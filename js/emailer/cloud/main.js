// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  Parse.Config.get().then(function(config){
    sendgrid.initialize(config.get("sendgrid_username"), config.get("sendgrid_password"));
 
    var fname = request.params.fname;
    var lname = request.params.lname;
    var email = request.params.email;
    var company = request.params.company;
    var message = request.params.message;
    var tag = request.params.tag;
    var env = request.params.env;
 
    sendgrid.sendEmail({
     to: "hello@thedreamcanvas.co",
     from: email,
     fromname: fname+" "+lname,
     subject: "Message from DreamCanvas Contact Form",
     text: "Tag: "+tag+"\nName: "+fname+" "+lname+"\nCompany: "+company+"\nEmail: "+email+"\n\nMessage:\n"+message+"\n\nEnvironment: "+env}, 
     {
       success: function(httpResponse) {
         console.log(httpResponse);
         response.success("Thanks for contacting DreamCanvas Solutions LLC!");
      },
       error: function(httpResponse) {
         console.error(httpResponse);
         response.error("Uh oh, something went wrong");
      }
    });
  });
});