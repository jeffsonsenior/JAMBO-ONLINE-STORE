import mongoose from "mongoose";


const connectDB = async () => {

  mongoose.connection.on('connected', () => {
    console.log("connection is successful")

  });

  await mongoose.connect(`${process.env.MONGODB_URI}/jambo_online_store`) 

}

export default connectDB;