import { Schema } from "mongoose";

const AdvantageSchema = new Schema({
  title: String,
  image: String,
  description: String,
});

export default AdvantageSchema;
