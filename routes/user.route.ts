import express from 'express';
import { checkAuth, forgotPassword, login, logout, resetPassword, signup, updateProfile, verifyEmail} from '../controller/user.controller';
import { isAuthenticated } from '../middlewares/authorised';
const userRouter = express.Router();



userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.post("/verify-email",verifyEmail);
userRouter.post("/logout",logout);
userRouter.post("/forgot-password",forgotPassword);
userRouter.post("/reset-password",resetPassword);
userRouter.put("/profile/update",isAuthenticated,updateProfile);
userRouter.get("/check-auth",isAuthenticated,checkAuth);
  

export default userRouter;