import {Schema} from "mongoose";
const ImprovingInnovationSchema = new Schema({
  title: String,
  subTitle: String,
  cardImage: String,
  cardTitle: String,
  cardSubTitle: String,
  navigateTo: String,
});

export default ImprovingInnovationSchema;
