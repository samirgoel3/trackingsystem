const path = require('path');
const express = require('express');
const hbs = require('hbs');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();


  
  hbs.registerPartials(__dirname+'/views/partials');
  app.set('view engine','hbs'); 
  app.use(express.static(__dirname+'/public'));

  app.get('/',(req , res)=>{
      res.render('home.hbs' , {
         date:new Date().getFullYear()
     });
  });
  
  
  
  /////////// about us page
  app.get('/about',(req, res) =>{
     res.render('about.hbs' , {
         date:new Date().getFullYear(),
         pagename:"About us"
     });
  });
  
  
  
  ////////// home page 
    app.get('/home',(req, res) =>{
     res.render('home.hbs' , {
         date:new Date().getFullYear(),
         pagename:"Home"
     });
  });
  
  
  
    ////////// home page 
    app.get('/pagetwo',(req, res) =>{
     res.render('pagetwo.hbs' , {
         date:new Date().getFullYear(),
         pagename:"Page two"
     });
  });
  
  
  
  
  
  
  

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});