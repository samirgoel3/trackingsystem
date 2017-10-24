const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
   
  app.use(express.static(__dirname+'/public'));

// app.use(express.static(publicPath));
  
  app.get('/',(req , res)=>{
      res.send('<h1>Now Working</h1>');
  });
  
  
  app.get('/about',(req, res) =>{
      res.send('This is about us page');
  });

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});