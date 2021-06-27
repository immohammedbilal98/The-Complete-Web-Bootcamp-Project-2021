const express= require("express");
const bodyParser = require("body-parser");
const request =  require("request");
const https = require("https");

const app = express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});


//  <form action="/" class="form-signin" method="POST"> You need to understand action&method Otherwise it's not working statement in npm
app.post("/", function(req,res){

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: firstName,
          LNAME: lastName

        }
      }
    ]
  };

  const jsonData =  JSON.stringify(data);

  const url= "https://us2.api.mailchimp.com/3.0/lists/746d95ef69";

  const options = {
    method: "POST",
    auth: "bilal1:c8409eb3166020f90a983d8608a147c8-us2"
  };

  const request = https.request(url, options, function(response){

    if (response.statusCode ===200) {
      res.sendFile(__dirname+"/success.html");
    } else{
      res.sendFile(__dirname+"/failure.html");
    }

    response.on("data",function(data){
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure",function(req,res){
  res.redirect("/");
})

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
