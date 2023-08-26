// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt  from 'jsonwebtoken';
import { ensuredDbconnected } from '@/lib/dbConnect';
import { Admin } from "db"
const SECRET = "S3CRET"
type Data = {
    token?: string
    message?: string
    name?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { username, password } = req.body;
    await ensuredDbconnected();

    const admin = await Admin.findOne({username})

    if (admin){
        res.status(403).json({message: "Admin already exists"})
    }else{
        const newAdmin = new Admin({username, password})
        newAdmin.save( )

        const token = jwt.sign({username, role: 'admin'}, SECRET, {expiresIn: '4h'} )
        res.status(201).json({message: "admin create successfully", token})
    }
};
