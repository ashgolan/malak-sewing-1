import { Schema, model } from "mongoose";
const date = new Date();
const year = date.getFullYear();
const month =
  date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

const expenseSchema = new Schema({
  date: { type: String, default: year + "-" + month + "-" + day },
  name: { type: String, required: true },
  number: { type: Number, default: "0" },
  paymentDate: { type: String, default: year + "-" + month + "-" + day },
  totalAmount: { type: Number },
});

export const Expense = model("Expense", expenseSchema);
