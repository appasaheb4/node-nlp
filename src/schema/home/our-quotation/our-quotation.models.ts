import { model } from "mongoose";
import OurQuotationSchema from "./our-quotation.schema";

export const OurQuotationModel: any = model("ourQuotation", OurQuotationSchema);
