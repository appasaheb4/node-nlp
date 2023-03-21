import { Schema } from "mongoose";
const OurFeatureSchema = new Schema({
  title: String,
  backgroundHeader: String,
  image: String,
  backgroundButtonTitle: String,
});

export default OurFeatureSchema;
