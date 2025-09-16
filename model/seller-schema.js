import mongoose from "mongoose";

const sellerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username is already used, enter another one"],
      validate: {
        validator: (name) => /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name),
        message: "Invalid username, try again",
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already exist!"],
      validate: {
        validator: (name) => /^^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(name),
        message: "Invalid Email, try again",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

const sellerModel = mongoose.model("seller", sellerSchema, "seller");

export default sellerModel;
