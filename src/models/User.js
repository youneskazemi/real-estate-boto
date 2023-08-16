import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    typeof: String,
    required: true,
  },
  password: {
    typeof: String,
    required: true,
  },
  createdAt: {
    typeof: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;
