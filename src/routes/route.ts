import express from 'express';
import { Response, Request } from 'express'
import UserController from '../controllers/UserController';
import AddressController from '../controllers/AddressController';
const routes = express.Router();

routes.get('/', UserController.GetUser);
routes.post("/createUser", UserController.CreateUser);
routes.post("/editUser/:id", UserController.UpdateUser);
routes.post("/getByIdade", UserController.GetUserById);
routes.post("/user/:id_user/address", AddressController.CreateAddress);

module.exports = routes;