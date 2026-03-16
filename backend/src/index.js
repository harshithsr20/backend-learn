import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js"
dotenv.config({ path: '.env' })
const startServer= async () => {
    try{
        await connectDB();
        app.on("error",(error) => {
            console.log("Error",error);
            throw error;
        });
        app.listen(4000 || 8000,() => {
            console.log("Server is running on port 4000");
        })

    }catch(error)
    {
        console.log("mongodb connection failed");
    }
}
startServer();