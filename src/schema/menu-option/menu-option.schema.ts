import {Schema} from 'mongoose';
const SubMenuInput = new Schema({
  id: Number,
  subMenu: String,
  subMenuOrder: String,
  subMenuVisibility: Boolean,
  subMenuCss: String,
  subMenuNavigateTo: String,
});
const Values = new Schema({
  id: Number,
  type: String,
  mainMenu: String,
  mainMenuOrder: Number,
  mainMenuVisibility: Boolean,
  mainMenuCss: String,
  mainMenuNavigateTo: String,
  subMenuInput: [SubMenuInput],
});
const MenuOptionSchema = new Schema({
  menuBar: String,
  menuBarOrder: Number,
  menuBarVisibility: Boolean,
  menuBarNavigateTo: String,
  menuBarCss: String,
  mainMenuInput: [Values],
});

export default MenuOptionSchema;
