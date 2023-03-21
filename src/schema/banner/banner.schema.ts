import {Schema} from 'mongoose';

const BannerSchema = new Schema({
  title: String,
  titleCss: String,
  subTitle: String,
  subTitleCss: String,
  content: String,
  contentCss: String,
  image: String,
  hide: Boolean,
});

export default BannerSchema;
