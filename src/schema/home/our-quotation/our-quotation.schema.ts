import { Schema } from "mongoose";
const OurQuotationSchema = new Schema({
  heading: String,
  title: String,
  image: String,
  subTitle: String,
});

export default OurQuotationSchema;
