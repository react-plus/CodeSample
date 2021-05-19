export type LoginParamsRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  token: string;
};

export type RegisterParamsRequest = {
  email: string;
  password: string;
};

export type RegisterResponse = {
  success: boolean;
  token: string;
};
