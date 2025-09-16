import mongoose from "mongoose";

const userSchema = new Schema(
  {
    username: {
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
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: {
        values: ["admin", "seller", "customer"],
        message: "Role {VALUE} is not supported",
      },
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema, "user");

export default userModel;
