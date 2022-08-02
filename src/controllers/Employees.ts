import { Request, Response } from "express";
import Employee from "../database/models/EmployeeModel";



const Employees = {

    async index(req: Request, res: Response): Promise<Response> {

        let employees = await Employee.find()


        return res.json(Employee)
    },


    async findById(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        let employees = await Employee.findById(id)


        return res.json(employees)
    },

    async create(req: Request, res: Response): Promise<Response> {

        await Employee.create(req.body)
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
        const { name, cpf, office, birthday, situation } = req.body

        await Employee.findByIdAndUpdate(id, {
            name: name,
            cpf: cpf,
            office: office,
            birthday: birthday,
            situation: situation
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

        await Employee.findByIdAndDelete(id)

            .then(data => {
                return res.json({ message: `${id} exluido com sucesso!` })
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })
        return res.status(500)

    }
}

export default Employees
