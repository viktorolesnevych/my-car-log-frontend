import {Log} from "./Log";

export interface Vehicle{
  id?: number;
  brand_id: number;
  model_id: number;
  user_id: number;
  nickName: string;
  brandName: string;
  modelName: string;
  logList: Log[];
  description: string;
  color: string;
  imgLink: string;
}
