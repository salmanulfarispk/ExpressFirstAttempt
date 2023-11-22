const express=require("express")
const app=express()
const port=7000
const userRouter=require("./Routes/User")



app.use(express.json())
app.use('/users',userRouter)


app.listen(port,()=>{
    console.log(`server is listening ${port}`)
})