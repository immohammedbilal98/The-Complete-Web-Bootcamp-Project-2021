const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/fruitDB');

const fruitSchema = new mongoose.Schema({
  Name: String,
  Rating: Number,
  Review: String,
});

const Fruit = mongoose.model("fruit", fruitSchema);

const fruit = new Fruit({
  Name: 'Mango',
  Rating: 10,
  Review: 'I like it !',
});

fruit.save();


