import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: { type: String, },
  email: { type: String, },
  password: { type: String, },
  fullName: { type: String, },
  location: { type: String, },
  role: { type: String, },
  age: { type: Number, },
  location: { type: String, },
  bio: { type: String, },
});

const profileModel = mongoose.model("Profile", profileSchema);

export default profileModel;
