import express from 'express';
import  ProductController  from '../controller/productController';

export const routes = express.Router();

routes.get('/list', ProductController.showListProduct);
routes.get('/product/create', ProductController.showCreateForm);
routes.post('/create', ProductController.createProduct);
// routes.get('/list/delete', ProductController.deleteProduct);
