const mongoose = require("mongoose");

const connectDB = async ()=>{

try {
    
    mongoose.set('strictQuery', false);
const connect = await mongoose.connect(process.env.MONGODB_URL);
console.log(`db connected ${connect.connection.host}`);

} catch (error) {
console.error(error);  
process.exit(1);  
}
}











module.exports = connectDB;