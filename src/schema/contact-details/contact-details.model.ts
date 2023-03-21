import { model } from "mongoose";
import ContactDetails from "./contact-details.schema";
export const ContactDetailModel: any = model("contactdetails", ContactDetails);
