import mongoose from "mongoose";


const userSchema =  new mongoose.Schema({
    username: {type: String},
    password: String,
    purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref:'Course'}]
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
})

export const Admin = mongoose.model('Admin', adminSchema)
export const User = mongoose.model('User', userSchema)
export const Course = mongoose.model('Course', courseSchema)


////////////////////////////////////////

// import mongoose,{Document, Schema} from "mongoose";

// // Define mongoose schemas


// // import mongoose, { Document, Schema } from 'mongoose';

// // interface User extends Document {
// //   username: string;
// //   email: string;
// //   // Other fields...
// // }

// // const UserSchema = new Schema<User>({
// //   username: { type: String, required: true },
// //   email: { type: String, required: true },
// //   // Other fields...
// // });

// // const UserModel = mongoose.model<User>('User', UserSchema);

// export interface User extends Document {
//     username : string,
//     password : string,
//     purchasedCourses : [string]
// }

// const UserSchema = new Schema<User>({
//     username: {type: String},
//     password: String,
//     purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
//   });
  

// export interface Admin extends Document{
//     username: string,
//     password: string
// }
// const AdminSchema = new mongoose.Schema<Admin>({
//     username: {type : String},
//     password: {type : String}
//   });

// export interface Course extends Document{
//     title: string,
//     description: string,
//     price: number,
//     imageLink: string,
//     published: boolean
// }
  
// const CourseSchema = new mongoose.Schema<Course>({
//     title: String,
//     description: String,
//     price: Number,
//     imageLink: String,
//     published: Boolean
//   });

// export const User =  mongoose.models["User"] || mongoose.model<User>('User', UserSchema);
// export const Admin = mongoose.models["Admin"] || mongoose.model<Admin>('Admin', AdminSchema);
// export const Course = mongoose.models["Course"] || mongoose.model<Course>('Course', CourseSchema);
  
// module.exports = {
//     UserModel,
//     AdminModel,
//     CourseModel,
//   }