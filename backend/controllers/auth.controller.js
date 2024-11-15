import { User } from "../model/user.model.js";
dotenv.config()
import bcrypt from "bcryptjs";


import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const dehashPassword = async (password, hashedPassword) => bcrypt.compare(password, hashedPassword);
const generateTokens=(userid)=>{
    const accessToken=jwt.sign({userid},process.env.ACCESS_SECRET,{
        expiresIn:"15min",
    })
    const refreshToken=jwt.sign({userid},process.env.REFRESH_SECRET,{
        expiresIn:"7d",
    })
    return{accessToken,refreshToken};
}
const setCookies = (res, accessToken, refreshToken) => {
    if (!res || !accessToken || !refreshToken) {
        throw new Error("res, accessToken, and refreshToken are required");
    }

    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        
        sameSite: "strict",
        maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
      
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
};
export const signup = async (req, res) => {
    try {
      const { name, username, email, password, confirmPassword } = req.body;
  
      // Check for existing user
      const userFound = await User.findOne({
        $or: [{ username }, { email }],
      });
  
      if (userFound) {
        return res.status(400).json({
          error: "User already exists",
        });
      }
  
      // Check if passwords match
      if (password !== confirmPassword) {
        return res.status(400).json({
          error: "Password and Confirm Password do not match",
        });
      }
   
  
      
      // Create new user
      const user = new User({
        name,
        username,
        email,
        password,
        
      });
  
      await user.save();
      const {accessToken,refreshToken}=generateTokens(user._id);
      // Save refresh token to user
      await User.findByIdAndUpdate(user._id, { refreshToken });
  
      
      setCookies(res,accessToken,refreshToken);
  
      // Send response
      return res.status(201).json({
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      // Handle exceptions
      console.error("Error during signup:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  };

export const login=async(req,res)=>{
    try {
     const {email,password}=req.body;
     console.log(email,password)
     const user=await User.findOne({email});
     
     if(!user){
      return res.status(400).json({
        message:"no user found"
      })
     }
     console.log("hi",user)
     const dehash= await dehashPassword(password,user.password)
    
     
    if(!dehash){
      return res.json({
        message:"wrong password"
      })
    }
    const{accessToken,refreshToken}=generateTokens(user._id);
    await User.findByIdAndUpdate(user._id, { refreshToken });
    setCookies(res,accessToken,refreshToken);
    res.status(200).json({
  message:"logged in successfully",
  userid:user._id,
  username:user.username,
 
  name:user.name,
  email:user.email
 
 
    })
    } catch (error) {
     console.log("error in login function");
     return res.status(500).json({
       errror:error.message,
     })
     
    }
 
 
 
 
 }
 
 export const logout = async (req, res) => {
  try {
    const { userid } = req;
    await User.findByIdAndUpdate(userid, { refreshToken: null });
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    return res.status(200).json({
      message: "Logged out successfully"
    });
  } catch (error) {
    console.error("Error in logout function:", error);
    return res.status(500).json({
      error: error.message
    });
  }
};
