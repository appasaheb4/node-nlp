import { model } from "mongoose";
import Contact from "./contact-us.schema";
export const ContactUsModel: any = model("contactus", Contact);
