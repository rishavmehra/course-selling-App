import mongoose from "mongoose";
let alreadyDone = false;

export async function ensuredDbconnected(): Promise<void>{
    if (alreadyDone){
        return 
    }
    alreadyDone = true 
    await mongoose.connect("mongodb://localhost:27017/courses")
}