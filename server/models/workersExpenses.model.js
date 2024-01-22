import { Schema, model } from "mongoose";
const date = new Date();
const year = date.getFullYear();
const month =
  date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

const workerExpensesSchema = new Schema({
  date: { type: String, default: year + "-" + month + "-" + day },
  location: { type: String, required: true },
  clientName: { type: String, required: true },
  equipment: { type: String, required: true },
  number: { type: Number, required: true },
  tax: { type: Boolean, default: false },
});

export const WorkerExpenses = model("WorkerExpenses", workerExpensesSchema);
