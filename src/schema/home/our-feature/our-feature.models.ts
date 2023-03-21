import { model } from "mongoose";
import OurFeatureSchema from "./our-feature.schema";

export const OurFeatureModel: any = model("ourFeature", OurFeatureSchema);
