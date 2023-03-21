import { Schema } from "mongoose";

const Values = new Schema({
  link: String,
  icon: String,
  hint: String,
  hide: Boolean,
});

const FooterSchema = new Schema({
  title: String,
  arrValue: [Values],
});

export default FooterSchema;
