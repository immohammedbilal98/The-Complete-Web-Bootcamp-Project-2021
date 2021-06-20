const express = require("express");
const bodyParser = require("body-parser");

const https = require("http");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/result.html", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "de609a476e4972b53faa2c8413ff8aa1";
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p> The weather is currently " + weatherDescription + "</p>");
      res.write(
        "<h1>The temperature in London is " + temp + "degree Celcius.</h1>"
      );
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
