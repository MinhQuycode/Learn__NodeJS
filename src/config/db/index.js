import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Education_dev");
    console.log("Thanh cong");
  } catch (error) {
    console.log(error);
  }
}
export default connect;
