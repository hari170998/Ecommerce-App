import  express from "express";
import { createProductController, getProductController, getSingleProductController, productPhotoController,deleteProductController, updateProductController, productCountController, searchProductController, realtedProductController, productCategoryController } from "../controllers/productController.js";
import { isAdmin, requireSignin } from '../middlewares/authMiddleware.js';
import formidable from "express-formidable";
import { productFiltersController, productListController } from './../controllers/productController.js';


const router=express.Router();
//create products
router.post('/create-product',requireSignin,isAdmin,formidable(),createProductController);

//get all products
router.get('/get-product',getProductController);

//get single product
router.get('/get-product/:slug',getSingleProductController);

//get product photo
router.get('/product-photo/:pid',productPhotoController);

//delete product
router.delete('/delete-product/:pid',requireSignin,isAdmin,deleteProductController);

//update product
router.put('/update-product/:pid',requireSignin,isAdmin,formidable(),updateProductController);

//filter product
router.post('/product-filters',productFiltersController);

//product count
router.get('/product-count',productCountController);

//product per page
router.get('/product-list/:page',productListController);

//search product
router.get('/search/:keyword',searchProductController);

//simlar products
router.get('/related-product/:pid/:cid',realtedProductController);

//category wise product products
router.get('/product-category/:slug',productCategoryController);

export default router;