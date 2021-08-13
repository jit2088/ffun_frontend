
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://newuser1:newuser1@cluster0.xqxv4.mongodb.net/cars?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("cars");
  var querySold = { status: "Sold" };
  var queryLive = {status: "Live"};
  var sold = 0;
  var live = 0; 
  dbo.collection("cars").find(querySold).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    sold = result.length;
    console.log(sold);
  });
  dbo.collection("cars").find(queryLive).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    live = result.length;
    console.log(live);
    db.close();
  });
  
});