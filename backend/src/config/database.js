import mongoose from "mongoose";
const connectDB=async () => {
    try
    {
        const connectionInstance = await mongoose.connect((`${process.env.MONGODB_URI}`))
        console.log(`WE GOT INTO MONGODB HAHAHAHAHAHAHHA at port ${connectionInstance.connection.host}`);
    } catch(error)
   {
        console.log("Connection failed sads :(",error);
        process.exit(1);
   }
}
export default connectDB;