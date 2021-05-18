import {Model} from './Model';

export interface Brand{
  id?: number;
  name: string;
  slogan: string;
  modelList: Model[];
}
