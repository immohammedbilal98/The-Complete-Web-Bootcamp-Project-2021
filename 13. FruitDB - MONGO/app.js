const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitDB';

// Use connect method to connect to the server
MongoClient.connect(url,{ useUnifiedTopology: true } ,function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

    
    insertDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruitDB');
  // Insert some documents
  collection.insertMany([
      {
        Name: "Banana",
          Score: 8,
          Review:
        "Great Fruit"
      },
      {
        Name: "Mango",
        Score: 10,
        Review: "kinda sour"
      },
      {
        Name: "Apple",
        Score: 8,
        Review: "Great Stuff"
      }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

