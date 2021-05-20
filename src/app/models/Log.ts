import {Comment} from './Comment';

export interface Log{
  id?: number;
  vehicle_id?: number;
  title: string;
  content: string;
  imgLink: string;
  commentList?: Comment[];
}
