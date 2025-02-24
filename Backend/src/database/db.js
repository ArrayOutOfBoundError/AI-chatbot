import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log(error);
  }
};

export { DBConnection };
