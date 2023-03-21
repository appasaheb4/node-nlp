import { Schema } from "mongoose";

const EnvironmentVariableSchema = new Schema({
  environmentVariable: String,
  value: Number,
  descriptions: String,
  enteredBy: String,
});

export default EnvironmentVariableSchema;
