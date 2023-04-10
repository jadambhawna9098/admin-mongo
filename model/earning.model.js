import mongoose from "../db/mongo.js";

const earningSchema = new mongoose.Schema({
    earning:{
        type:Number
    }
  });
  
  const Earning = mongoose.model('Product', earningSchema);
  
  export default Earning;
  
