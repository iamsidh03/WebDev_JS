const express=require("express");
const app=express();
const myFirstMiddleware =(req,res,next) =>{
    console.log("this is my first middleware will run on every request ");
    next();
}
app.use(myFirstMiddleware);

app.get("/",(req,res) =>{
    res.send("Welcome to our home page");
}
);
app.get("/about",(req,res) =>{
    res.send("Welcome to our about page");
});
app.listen(3000 ,() =>{
    console.log("server is running on port 3000");
});
// This code sets up a simple Express server with a middleware that logs a message for every request.