import mongoose, { Schema } from "mongoose";

const Todo =
  mongoose.models.Todo ||
  mongoose.model("Todo", {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  });

export default Todo;
