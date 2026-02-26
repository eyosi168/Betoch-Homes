import prisma from "../lib/prisma.js"
import bcrypt from "bcrypt"

export const getUsers = async (req,res)=>{
    
    try{
        const users = await prisma.user.findMany()
        res.status(200).json(users)

    }catch(err){
        console.log(err)
        res.status(500).json({mesage:"Failed to get users"})
    }
}
export const getUser = async (req,res)=>{
    const id = req.params.id
   
    try{
        const user = await prisma.user.findUnique({
            where:{id},
            
        })
        res.status(200).json(user)
    }catch(err){
        console.log(err)
        res.status(500).json({mesage:"Failed to get user"})
    }
}
export const updateUser = async (req,res)=>{
    const id = req.params.id
    const tokenUserId= req.userId
    const {password,...inputs} = req.body;
    if (id !== tokenUserId){
        return res.status(403).json({message:"not Authorized"})
    }
    let updatePassword=null;
    try{
        if(password){
            updatePassword=await bcrypt.hash(password,10)

        }
        const updatedUser = await prisma.user.update({
            where:{id},
            data:{
                ...inputs,
                ...(updatePassword&&{password:updatePassword})
            },
        })
        res.status(200).json(updatedUser)
        

    }catch(err){
        console.log(err)
        res.status(500).json({mesage:"Failed to get users"})
    }
}
export const deleteUser = async (req,res)=>{
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({mesage:"Failed to get users"})
    }
}