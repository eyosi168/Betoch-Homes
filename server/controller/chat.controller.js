import prisma from "../lib/prisma.js"


export const getChats = async (req,res)=>{
    const tokenUserId = req.userId
    
    try{
        const chats = await prisma.chat.findMany({
            where:{
                userIDs:{
                    hasSome:[tokenUserId]
                }
            }
        })
        
      res.status(200).json(chats)
    }catch(err){
        console.log(err)
        res.status(500).json({mesage:"Failed to get chats"})
    }
}
export const getChat = async (req,res)=>{
    
    try{
        

    }catch(err){
        console.log(err)
        res.status(500).json({mesage:"Failed to get chat"})
    }
}
export const addChat = async (req,res)=>{
    
    try{
        
    }catch(err){
        console.log(err)
        res.status(500).json({mesage:"Failed to add chats"})
    }
}
export const readChat = async (req,res)=>{
    
    try{
        

    }catch(err){
        console.log(err)
        res.status(500).json({mesage:"Failed to read chats"})
    }
}
