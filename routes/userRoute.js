import express from 'express';

import {
    create,
    getAllFeedback,
} from "../controller/userController.js"

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllFeedback);

export default route;