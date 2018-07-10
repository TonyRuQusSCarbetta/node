const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.send("getting root");
});

app.listen(3000);
