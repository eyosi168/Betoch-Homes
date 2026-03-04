import prisma from "../lib/prisma.js";
export const addMessage = async (req,res)=>{
    const tokenUserId = req.userId
    
    try{
        
        

    }catch(err){
        console.log(err)
        res.status(500).json({mesage:"Failed to add message"})
    }
}