export interface User {
  username: string;
  email: string;
  password: string;
}

export interface Role {
  rolename: string;
}

export interface UserRole {
  username: string;
  rolename: string;
}