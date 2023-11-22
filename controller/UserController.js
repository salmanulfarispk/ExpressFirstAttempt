const userData=require("../models/UserInfo")
// console.log(userData);

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
            //  console.log(userData)
        }
    },
    getByid:(req,res)=>{

     const id=parseInt(req.params.id)
     const userByid=userData.find((user)=>
             user.id === id
     )
      
     if (userByid){
        res.json(userByid)
     }else{
        res.status(404).json({Error:" user not found"})
     }

    },
    put:(req,res)=>{

        const id=parseInt(req.params.id)
        const {username,name,email}=req.body
        const userindex = userData.findIndex((user) =>
             user.id === id
        )

        if(userindex === -1){
            res.status(404).json({Error:"user not found"})
        }else{
            userData[userindex]={              // It uses the spread syntax (...) to create a new object with the existing user data
               ...userData[userindex],         // and updates only the specified properties.
                username,
                name,
                email
            }
            res.json(userData[userindex])
        }


    },
    delete:(req,res)=>{

       const id=parseInt(req.params.id)
       const userindex=userData.findIndex((user)=>   user.id === id )

        
        if(userindex === -1){
            res.status(404).json({Error:"user not found"})
        }else{
            userData.splice(userindex, 1)      // userIndex is the index of the element you want to start modifying from.
            res.json(userData)                    //  1 is the number of elements to remove from the array.
                                                // So, this line is removing one element from the userData array at the position specified by userIndex.

        }



    }
    







}



