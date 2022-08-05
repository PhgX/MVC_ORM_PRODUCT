import {AppDataSource} from "../data-source";
import {Product} from "../model/product";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload";

 class ProductController {
    private productRepository: any;
    constructor () {
        AppDataSource.initialize().then(connection => {
            this.productRepository = connection.getRepository(Product);
        });
    }

    showListProduct = async (req: Request, res: Response) => {
        let products = await  this.productRepository.find();
        res.render('product/list', {
            products: products
        });
    }

    showCreateForm = async (req: Request, res: Response) => {
        res.render('product/create');
    }

    createProduct = async (req: Request, res: Response) => {
        let files = req.files;
         if(files){
            let product = req.body
            if(files.image && product.name){
                let image = files.image as UploadedFile;
                image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.save(product);
                res.redirect(301, '/list');
            } else {
                res.render('../views/product/error');
            }
        } else {
            res.render('../views/product/error');
        }
    }
}

export default new ProductController()