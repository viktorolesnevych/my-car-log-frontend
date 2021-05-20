import {Vehicle} from './Vehicle';

export interface User{
  id?: number;
  userName: string;
  emailAddress: string;
  password: string;
  passwordChangedTime: string;
  vehicleList: Vehicle[];
  profileId?: number;
  isAdmin?: boolean;
}
