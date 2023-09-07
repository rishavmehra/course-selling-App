// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ensuredDbconnected } from '@/lib/dbConnect'
import { Course } from 'db'
import type { NextApiRequest, NextApiResponse } from 'next'

interface CoureseListRes{
    courses: typeof Course[]
}

interface CourseAddRes{
    message: string,
    courseId: any   
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< CoureseListRes | CourseAddRes  >
) {
    ensuredDbconnected();
    if(req.method==="GET"){
        const courses: typeof Course[] = await Course.find({});
        res.json({courses})
    }
    else if(req.method==="POST"){
        const course = new Course(req.body);
        await course.save();
        res.json({message: "Course Created Successfully", courseId: course._id})
    }
}
