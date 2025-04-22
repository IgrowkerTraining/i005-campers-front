export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  name: string;
  password: string;
  owner: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // password hasheada
}

export interface LoginResponse {
  token: string;
  user: User;
  owner: boolean;
}