const userData=require("../models/UserInfo")
console.log(userData);

module.exports={

    get: (req,res) => {
        res.send(userData)
    },

    post:(req,res)=>{
      
        const {username,name,email}=req.body

        if(!username,!name,!email){
            res.status(400).json("please provide all required fields")
        }else{
            

          const newuser={
            id:userData.length +1,
            username:username,
            name:name,
            email:email

          }
           userData.push(newuser)
           res.json("new user added")

        }
    },
    getByid:(req,res)=>{

     const id=parseInt(req.params.id)




    },
    







}



