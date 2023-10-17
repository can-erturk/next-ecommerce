import mongoose, { Schema, models } from "mongoose"

const userSchema = new Schema(
  {
    provider: {
      type: String,
      required: true,
      default: "credentials",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema, "users")
export default User