import mongoose from "mongoose";

export const db =async () =>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo DB is Connected");
    }catch(e){
        console.error("Error Connectio");
        process.exit(1);
    }
}

