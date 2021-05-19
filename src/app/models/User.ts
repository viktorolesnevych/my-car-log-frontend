export interface User{
  id?: number;
  userName: string;
  emailAddress: string;
  password: string;
  passwordChangedTime: string;
  profileId?: number;
  isAdmin?: boolean;
}
