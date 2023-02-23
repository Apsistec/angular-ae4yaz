// import { Roles } from "./roles";
// import { Location } from "../enums/location";

export interface CurrentUser {
  name: string;
  email: string;
  location: string; //Location
  roles: string[];
  lastSignedIn?: string;
}
