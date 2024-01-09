import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    const conn = mongoose.connect(
      'mongodb+srv://harsh123:harsh123@cluster0.uimb1gh.mongodb.net/proshop?retryWrites=true&w=majority'
    );
    console.log(`MongoDB Connected `);
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
