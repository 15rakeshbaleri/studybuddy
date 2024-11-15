import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "no token found" });
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET);
        console.log("decoded", decodedToken);

        const user = await User.findById(decodedToken?.userid).select("-password -refreshToken");

        if (!user) {
            return res.status(404).json({ message: "no user found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("error in verifyJWT", error);
        return res.status(401).json({ message: error.message });
    }
};
 

