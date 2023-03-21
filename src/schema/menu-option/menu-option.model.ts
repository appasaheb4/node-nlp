import {model} from 'mongoose';
import MenuOptions from './menu-option.schema';
export const MenuOptionModel: any = model('menuoptions', MenuOptions);
