import { model } from "mongoose";
import ImprovingInnovationSchema from "./improving-innovation.schema";

export const ImprovingModel: any = model(
  "improvingInnovation",
  ImprovingInnovationSchema
);
