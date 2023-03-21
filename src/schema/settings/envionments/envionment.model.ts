import {model} from 'mongoose';
import EnvironmentVariable from './envionment.schema';
export const EnvironmentVariableModel: any = model(
  'environment',
  EnvironmentVariable
);
