import  Express  from 'express';
import asyncHandler from "express-async-handler"
import User from './Models/UserModel.js';
import users from './data/users.js';

import product from './data/Products.js';
import Product from './Models/ProductModel.js'
import Category from './Models/Category.js';
import category from './data/category.js'

const ImportData = Express.Router()

ImportData.post("/user", asyncHandler(
    async(req,res)=>{
        await User.remove({});
        const importUser = await User.insertMany(users);
        res.send({ importUser });
    }
)
);

ImportData.post("/product", asyncHandler(
    async(req,res)=>{
        await Product.remove({});
        const importProducts = await Product.insertMany(product);
        res.send({ importProducts });
    }
)
);
ImportData.post("/category", asyncHandler(
    async(req,res)=>{
        await Category.remove({});
        const importCategory = await Category.insertMany(category);
        res.send({ importCategory });
    }
)
);


export default ImportData;