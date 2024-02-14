const express=require("express")

const app=express();
const DataRoutes=require("./routes/data")

app.use("/home",DataRoutes)
app.listen(4000,function(){
    console.log("The server is running at port 4000")
})