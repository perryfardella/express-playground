import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITask extends Document {
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Optional index example (for searching/sorting efficiency)
// TaskSchema.index({ title: 1 });

export const TaskModel: Model<ITask> = mongoose.model<ITask>(
  "Task",
  TaskSchema
);
