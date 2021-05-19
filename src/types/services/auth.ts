export type User = {
  email: string;
  firstName: string;
  lastName: string;
};

export type LoginParamsRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  token: string;
  user: User;
};

export type RegisterParamsRequest = {
  email: string;
  password: string;
};

export type RegisterResponse = {
  success: boolean;
};
