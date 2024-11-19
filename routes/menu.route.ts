import express from "express" 
import upload from "../middlewares/multer";

import { addMenu, editMenu } from "../controller/menu.controller";
import { isAuthenticated } from "../middlewares/authorised";

const menuRouter = express.Router();

menuRouter.post("/",isAuthenticated, upload.single("image"), addMenu);
menuRouter.put("/:id",isAuthenticated, upload.single("image"), editMenu);
 
export default menuRouter;


