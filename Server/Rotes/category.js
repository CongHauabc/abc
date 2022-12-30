import Express from "express";
import asyncHandler from "express-async-handler";
import { admin, protect } from "../Middleware/AuthMiddleware.js";
import Category from './../Models/Category.js';



const categoryRoute = Express.Router();

categoryRoute.get("/",asyncHandler(async(req,res)=>{
    const category = await Category.find({})
    res.json(category)
}))


export default categoryRoute