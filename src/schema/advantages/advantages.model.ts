import { model } from "mongoose";
import Advantage from "./advantages.schema";
export const AdvantageModel: any = model("advantage", Advantage);
