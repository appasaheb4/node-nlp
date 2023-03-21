import { Schema } from "mongoose";

const ContactUsSchema = new Schema({
  firstName: String,
  email: String,
  message: String,
  status: String,
});

export default ContactUsSchema;
