import type { UploadFile, UsersPermissionsMeRole } from "codac-graphql-types";

export interface UserLoginResponse {
  jwt: string;
  user: UsersPermissionsMe;
}
export interface UsersPermissionsMe {
  avatar?: UploadFile;
  blocked?: boolean;
  confirmed?: boolean;
  email?: string;
  firstname?: string;
  id: string;
  lastname?: string;
  role?: UsersPermissionsMeRole;
  username: string;
}
export interface LMSSearchResults {
  courses: Course[];
  projects: Project[];
  pages: Page[];
}
