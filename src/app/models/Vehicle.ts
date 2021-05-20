import {Log} from './Log';

export interface Vehicle{
  id?: number;
  brand_id?: number;
  model_id?: number;
  user_id?: number;
  nickName: string;
  brand_name?: string;
  model_name?: string;
  logList?: Log[];
  description: string;
  color: string;
  imgLink: string;
}
