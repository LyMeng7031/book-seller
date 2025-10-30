export default interface IUser extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  age: number;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterInput {
  firstName: String;
  lastName: String;
  userName: String;
  age: Number;
  role?: String;
  phone: String;
  email: String;
  password: String;
}


 export interface JwtPayloadInput {
  id:string;
   userId: string;
   role: string;
   email: string;
   userName: string;
   roles: string[];
   
 } // we have to use export interface because it is the input type
