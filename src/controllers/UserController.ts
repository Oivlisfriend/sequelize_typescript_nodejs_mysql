const User = require('../models/User')
import { Request, Response } from 'express';

interface RequestBody {
    name: string,
    email: string
}
const GetUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await User.findAll({
            where: {
                idade: 12
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
const GetUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { idade } = req.body;
        const user = await User.findOne({
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
const CreateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, idade } = req.body;
        const create = await User.create(
            {
                idade,
                name: "ssd",
                updatedAt: "2023-10-15T15:54:34.638Z"

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
        const edit = await User.findByPk(id);
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
    GetUser,
    CreateUser,
    UpdateUser,
    GetUserById
};