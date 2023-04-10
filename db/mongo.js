import mongoose from 'mongoose';


const mongoose = mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB Successfully");
}).catch((err) => {
  console.log("Error connecting to MongoDB", err);
});

export default mongoose;