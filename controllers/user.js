import { user } from "../models/user.js";

export const getAllUsers = async (req,res)=>{
    
    const users = await user.find({});
    console.log(req.query);
    const keyword = req.query.keyword;
    console.log(keyword);
    res.json({
        success:true,
        users,
    })
}
export const register = async (req,res)=>{
    const {name,email,password} = req.body;
    const users = await user.create({
        name,email,password,
    })
    res.status(201).cookie("tempi","lol").json({                // 201 status code means that the data is created.
        success:true,
        message:"Registered Successfully"
    })
}
export const special = async (req,res)=>{

    res.json({
        success: true,
        message: "just-joking",
    });
}
export const getUserDetail = async (req, res) => {
    const { id } = req.params;
    const foundUser = await user.findById(id);
    console.log(req.params);
    res.json({
        success: true,
        foundUser,
      });
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const foundUser = await user.findById(id);
    console.log(req.params);
    res.json({
        success: true,
        message:"User Updated",
      });
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const foundUser = await user.findById(id);
    await foundUser.remove();
    res.json({
        success: true,
        message:"User deleted",
      });
}