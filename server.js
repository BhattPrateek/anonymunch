const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb')
const mongoClient = require('mongodb').MongoClient;

const app = express();

var db;
app.use(bodyParser.urlencoded({extended: true}));

mongoClient.connect("mongodb://localhost:27017/prateekDb", function(err, database){
  if(err){
    console.log("Couldn't Connect to local Database");
  }else{
    db = database;
    app.listen(4578, function(){
      console.log("Firing up the server with express!");
    });
  }
});


app.get('/', (request, response)=>{
  console.log("Inside GET method.");
  var cursor = db.find('name').find().toArray(function(err, arr){
    if(err) {
      console.log(err);
    }
    else{

    }
  });
  console.log(cursor);
  response.sendFile(__dirname+'/index.html');
});

app.post('/insertion', (request, response)=>{
  console.log("Inside of POST method");
  response.send("Sickkkkk "+ JSON.stringify(request.body));

});
console.log("server got fired up somehow bro", __dirname);
