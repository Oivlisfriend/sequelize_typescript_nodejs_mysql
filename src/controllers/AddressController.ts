const Address = require('../models/Address')
const User = require('../models/User')
import { Request, Response } from 'express';

interface RequestBody {
    name: string,
    email: string
}
const GetAddress = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await Address.findAll();
        return res.status(200).send({
            status: 200,
            message: 'OK',
            data: user
        });
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            })
        }
        return res.status(500).send({
            status: 500,
            message: "Internal server error",
            erros: error
        })
    }

}
const GetUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idade } = req.body;
        const user = await Address.findOne({
            where: {
                idade
            }
        });
        return res.status(200).send({
            status: 200,
            message: 'OK',
            data: user
        });
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            })
        }
        return res.status(500).send({
            status: 500,
            message: "Internal server error",
            erros: error
        })
    }

}
const CreateAddress = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id_user } = req.params;
        const { rua, casa } = req.body;

        const user = await User.findByPk(id_user);
        if (!user) {
            return res.status(404).send({
                status: 404,
                message: 'Data Not Found',
                data: null
            });
        }
        const create = await Address.create(
            {
                rua,
                casa,
                id_user
            });
        return res.status(201).send({
            status: 201,
            message: 'Created',
            data: create
        })
    }
    catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            })
        }
        return res.status(500).send({
            status: 500,
            message: "Internal server error",
            erros: error
        })
    }
}
const UpdateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { name, idade } = req.body;
        const edit = await Address.findByPk(id);
        if (!edit) {
            return res.status(404).send({
                status: 404,
                message: 'Data Not Found',
                data: null
            });
        }
        edit.name = name;
        edit.idade = idade;
        await edit.save();
        return res.status(200).send({
            status: 200,
            message: 'OK',
            data: edit
        });
    }
    catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            })
        }
        return res.status(500).send({
            status: 500,
            message: "Internal server error",
            erros: error
        })
    }
}

export default {
    GetAddress,
    CreateAddress,
    UpdateUser,
    GetUserById
};