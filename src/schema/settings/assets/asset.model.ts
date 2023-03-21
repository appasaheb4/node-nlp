import { model } from "mongoose";
import Assets from "./asset.schema";
export const AssetModel: any = model("assets", Assets);
