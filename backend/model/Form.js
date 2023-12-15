import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "Type of meal is required"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Food items are required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const formModel = mongoose.model("form", formSchema);
export default formModel;
