import { Schema } from "mongoose";
const Values = new Schema({
  link: String,
  icon: String,
});
const OurQuotationSchema = new Schema({
  name: String,
  image: String,
  designation: String,
  specialty: String,
  socialLinks: [Values],
});

export default OurQuotationSchema;
