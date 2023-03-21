import { Schema } from "mongoose";

const AssetSchema = new Schema({
  title: String,
  value: String,
  image: String,
  description: String,
});

export default AssetSchema;
