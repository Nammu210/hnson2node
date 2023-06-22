const express=require('express')

const app=express();

app.get('/',function(req,res){res.send("Home page")})
app.get('/api/main/html',function(req,res){
    res.send("<h1>why we use express  js </h1>")
    res.send("ExpressJS is designed to be fast and efficient, with a lightweight architecture that allows it to handle large amounts of traffic with ease.")

})
app.get('/api/main/json',function(req,res){
    res.json({name:"Namrata"})
})
app.get('/api/main/normal',function(req,res){
    res.send("ExpressJS is designed to be fast and efficient, with a lightweight architecture that allows it to handle large amounts of traffic with ease.")
})
app.listen(3000);