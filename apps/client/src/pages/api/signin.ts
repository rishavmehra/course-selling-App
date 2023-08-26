// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import  jwt  from 'jsonwebtoken';
import { Admin } from 'db';
import { ensuredDbconnected } from '@/lib/dbConnect';
const SECRET = "S3CRET"

type Data = {
  message?: string,
  token?: string,
  name?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await ensuredDbconnected();
  const { username, password } = req.body;
  const admin = await Admin.findOne({username, password })
  if(admin){
    const token = jwt.sign({username, role:admin}, SECRET, {expiresIn: '4h'})
    res.json({message: 'Logged in successfully', token })
  }else {
    res.status(403).json({ message: 'Invalid username or password' });
  }
};
