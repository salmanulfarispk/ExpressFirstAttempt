const express=require("express")

const router=express.Router()
const controller=require("../controller/UserController")





  
router.get("/",controller.get)
router.post("/",controller.post)
router.get("/:id",controller.getByid)
router.put("/:id",controller.put)
router.delete("/:id",controller.delete)
module.exports=router
