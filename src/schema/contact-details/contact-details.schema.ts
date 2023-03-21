import { Schema } from "mongoose";

const ContactDetailSchema = new Schema({
  title: String,
  image: String,
  content: String,
});

export default ContactDetailSchema;
