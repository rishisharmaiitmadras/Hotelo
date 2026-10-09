import User from "../models/userModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import validator from 'validator';
const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword,phone, role } = req.body; //fetching from frontend

    //1. validation check
    if (!name || !email || !password) {
     return res.status(400).json({ message: "enter all required fields" });
    }
    
    if(!validator.isEmail(email)){
      return res.status(400).json({message:"Please Enter a valid Email Address"})
    }

    //2.user existance 
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist with this email" });
    }
    if(password != confirmPassword){
      return res.status(400).json({message:"password and confirmPassword are different"})
    }

    //3.converting a password into hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
    });

    // 5. Send Success Response
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        message: "Registration successful!",

        
      });
      console.log("user registration successfully ")

    }
        
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Invalid user or password" });
    }

    const user = await User.findOne({ email });
    const passwordStatus = await bcrypt.compare(password, user.password);

    if (user && passwordStatus) {
      
      return res
        .status(200)
        .json({
          user,
          // id: user._id,
          // name: user.name,
          // email: user.email,
          // role: user.role,
          token: generateToken(user._id),
        });
    } else {
      return res.status(400).json({ message: "INVALID EMAIL OR PASSWORD" });
    }
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
};

export const getUserProfile = async (req, res) => {
  res.status(200).json(req.user);
};
export { registerUser, loginUser };
