import  express from "express";
import { createCategoryController, singleCategoryController, updateCategoryController ,deleteCategoryController} from '../controllers/CategoryController.js';
import { isAdmin, requireSignin } from '../middlewares/authMiddleware.js';
import { categoryController } from './../controllers/CategoryController.js';

const router=express.Router();

//routes
//create category
router.post('/create-category',requireSignin,isAdmin,createCategoryController);

//udate category
router.put('/update-category/:id',requireSignin,isAdmin,updateCategoryController);

//get all category
router.get('/get-category',categoryController);

//get single category
router.get('/single-category/:slug',singleCategoryController);

//delete category
router.delete('/delete-category/:id',requireSignin,isAdmin,deleteCategoryController);
export default router;