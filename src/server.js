const express = import('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
var mongo = require ("mongodb");
var bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(cors());

app.use(express.static('public'));
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
   res.console("sent to index")
});
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});

app.post("/createaccount/",bodyParser.urlencoded({extended: false}) ,(req, res, next) => {
   console.log(req);
   // perform actions on the collection object
   const post = {
      FirstName: bodyParser.urlencoded()
      // "LastName": req.body.last,
      // "Username": req.
      // "Password": req.body.pass
   }
   mongo.connect
   const collection = client.db('FitnessPro').collection('Users');
   collection.insertOne(post);
   console.log("item inserted");
   client.close();

   
   res.redirect("/");
});