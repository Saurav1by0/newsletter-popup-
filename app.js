const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const client = require("@mailchimp/mailchimp_marketing"); // you need to add dependency first. See tips.
 
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
 
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});
 
client.setConfig({
  apiKey: "2586d4d3deec085601f2b96ea2ad0364-us6",
  server: "Self",
});
 
app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  console.log(firstName, lastName, email);
  const subscribingUser = {
    firstName: firstName,
    lastName: lastName,
    email: email
  }
 
  const run = async () => {
    try {
      const response = await client.lists.addListMember("YOUR LIST ID", {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName
        }
      });
      console.log(response);
      res.sendFile(__dirname + "/success.html");
    } catch (err) {
      console.log(err.status);
      res.sendFile(__dirname + "/failure.html");
    }
  };
 
  run();
});
 
app.post("/failure", function(req, res) {
  res.redirect("/");
});
 
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});

// API key 2586d4d3deec085601f2b96ea2ad0364-us6

// Some plugins and integrations may request your Audience ID.
// Typically, this is what they want: 84b4e6e7d6.