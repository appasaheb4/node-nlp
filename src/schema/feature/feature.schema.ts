import { Schema } from "mongoose";

const FeatureSchema = new Schema({
  title: String,
  image: String,
  description: String,
});

export default FeatureSchema;
