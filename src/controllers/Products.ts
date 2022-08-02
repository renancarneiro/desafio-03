import { Request, Response } from "express";
import Product from "../database/models/ProductModel";



const Products = {

    async index(req: Request, res: Response): Promise<Response> {

        let products = await Product.find()


        return res.json(Product)
    },


    async findById(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        let products = await Product.findById(id)


        return res.json(products)
    },

    async create(req: Request, res: Response): Promise<Response> {

        await Product.create(req.body)
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

        return res.status(500)
    },

    async update(req: Request, res: Response): Promise<Response> {


        const { id } = req.params;
        const { name, category, price} = req.body

        await Product.findByIdAndUpdate(id, {
            name: name,
            category: category,
            price: price
        })
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

        return res.status(500)

    },

    async delete(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        await Product.findByIdAndDelete(id)

            .then(data => {
                return res.json({ message: `${id} exluido com sucesso!` })
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })
        return res.status(500)

    }
}

export default Products
