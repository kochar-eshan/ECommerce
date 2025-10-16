import Products from '../models/products.js';


export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Products.find({});
       return  res.status(200).json({
        success : true,
        data : products
});
    } catch (error) {
        next(error);
    }
}

export const addPro = async (req, res, next) =>{
    try {
        
        const pro = await Products.create({ ...req.body });
        return res.status(201).json({
            success : true,
            data : pro
        });
    } catch (error) {
        next(error);
    }
}

