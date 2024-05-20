export interface IUserData {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
}

export interface IFormInput {
  label: string; 
  type: string; 
  id: string;
  name: keyof IUserData ;
}