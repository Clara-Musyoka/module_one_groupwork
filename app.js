let express = require("express")
let homeRouter = require("./routes/index")
//let loginRouter = require ("./routes/login")
//let aboutRouter= require("./routes/about")

//using the routes as middlewares
let app =  express(); //createServer()
app.use("/", homeRouter);
//app.use("/login", loginRouter);
//app.use("/about", aboutRouter);
//you can restrict access to resources by applying a permision mapped using prefix related
// saf.co.ke/customer/login
//          /customer/sign-up

/////Using the views we use the app.set()
app.set("view engine", "ejs");

let PORT=null;
if(process.env.PORT){
    PORT= process.env.PORT;
    
}else{
    PORT= 5500;
}
app.listen(PORT, ()=>{
    console.log(`Server is starting on port  ${PORT}`)
}) 