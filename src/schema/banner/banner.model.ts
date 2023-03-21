import {model} from 'mongoose';
import Banner from './banner.schema';
export const BannerModel: any = model('banners', Banner);
