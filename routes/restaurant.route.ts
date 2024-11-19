import express from "express"
import { createRestaurant, getRestaurant, getRestaurantOrder, getSingleRestaurant, searchRestaurant, updateOrderStatus, updateRestaurant} from "../controller/restaurant.controller";
import { isAuthenticated } from "../middlewares/authorised";
import upload from "../middlewares/multer";


const restauRouter = express.Router();

restauRouter.post("/",isAuthenticated, upload.single("imageFile"), createRestaurant);
restauRouter.get("/",isAuthenticated, getRestaurant);
restauRouter.put("/",isAuthenticated, upload.single("imageFile"), updateRestaurant);
restauRouter.get("/order",isAuthenticated,  getRestaurantOrder);
restauRouter.put("/order/:orderId/status",isAuthenticated, updateOrderStatus);
restauRouter.get("/search/:searchText",isAuthenticated, searchRestaurant);
restauRouter.get("/:id",isAuthenticated, getSingleRestaurant);

export default restauRouter;


