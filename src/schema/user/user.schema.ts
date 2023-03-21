import dayjs from "dayjs";
import { Schema } from "mongoose";
const UserSchema = new Schema({
  userId: String,
  mobileNo: String,
  fullName: String,
  password: String,
  accessToken: String,
  refreshToken: String,
  sessionAllowed: String,
  sessionAllowedCount: Number,
  status: String,
  dateOfEntry: {
    type: Number,
    default: dayjs(new Date()).unix(),
  },
  lastUpdated: {
    type: Number,
    default: dayjs(new Date()).unix(),
  },
});
export default UserSchema;
