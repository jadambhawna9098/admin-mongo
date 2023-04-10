import express from "express";
import bodyParser from "body-parser";
import mongoose from "./db/mongo.js";
import AdminRouter from './routes/admin.route.js';
import ProductRouter from './routes/product.route.js';
import CategoryRouter from './routes/category.route.js';
import SubscriptionRouter from './routes/subscription.route.js';
import UserRouter from './routes/user.route.js';
import StaffRouter from './routes/staff.route.js';
import ShippingRouter from "./routes/shipping.route.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/admin', AdminRouter);

app.use("/product", ProductRouter);

app.use("/category", CategoryRouter);

app.use("/subscription", SubscriptionRouter);

app.use("/user", UserRouter);

app.use("/staff", StaffRouter);

app.use("/shipping",ShippingRouter);


app.listen(100, () => {
    console.log("Server Started");
})

