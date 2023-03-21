import { model } from "mongoose";
import Feature from "./feature.schema";
export const FeatureModel: any = model("feature", Feature);
