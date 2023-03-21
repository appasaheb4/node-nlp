import { model } from "mongoose";
import OurTeamSchema from "./our-team.schema";

export const OurTeamModel: any = model("ourTeam", OurTeamSchema);
