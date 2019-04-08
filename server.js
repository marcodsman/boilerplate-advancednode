'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const passport    = require('passport');
const session     = require('express-session');
const mongo       = require('mongodb').MongoClient;
const routes      = require('./routes.js');
const auth        = require('./auth.js');
const app = express();

app.set('view engine', 'pug');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitalized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

mongo.connect(process.env.DATABASE, (err, client) => {
  var db = client.db('freecodecamp')
  if (err) {
    console.log("Database Error: "+ err);
  } else {
    console.log("Succesfully connected to database");
    
    // Authentication
    auth(app, db);
    // Routing
    routes(app, db);

    app.use((req, res, next) => {
      res.status(404)
        .type('text')
        .send('Not Found')
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log("Listening on port " + process.env.PORT);
    });
  
    
    
  }
})



fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

