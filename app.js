
//import express
const express = require('express');

//import bootstrap
const bootsratp = require('bootstrap');


//menggunakan bootstrap
const boot = bootstrap();
//menggunakan express sebagai parameter
const app = express();

//tambahkan route untuk halaman hello
app.get('/hello',(req, res)=>{
  res.render('hello.ejs');
});

// Tambahkan route untuk halaman top
app.get('/top',(req,res)=>{
  res.render('top.ejs');
});

// tambahkan route untuk halaman index
app.get('/index', (req,res)=>{
  res.render('index.ejs');
})

app.listen(3000);
