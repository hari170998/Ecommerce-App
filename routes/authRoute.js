import express from 'express';
import {loginController, registerController,testController,forgotPasswordController, updateProfileController} from '../controllers/authController.js';
import { isAdmin, requireSignin } from '../middlewares/authMiddleware.js';
//Router object
const router=express.Router();

//routing
//Register || Method POST
router.post('/register',registerController);

//Login || POST
router.post('/login',loginController);

//Test||GET
router.get('/test',requireSignin ,isAdmin, testController);

//Forgot password || POSt
router.post('/forgot-password',forgotPasswordController);

//protected User route auth
router.get('/user-auth',requireSignin,(req,res)=>{
    res.status(200).send({ok:true});
});

//protected Admin route
router.get('/admin-auth',requireSignin,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

//update profile
router.put('/profile',requireSignin,updateProfileController);

export default router;