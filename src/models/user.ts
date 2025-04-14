export interface Author {
  id: number;
  name: string;
  permalink: string;
  image: string;
}

export interface UserSignUpPayload {
  email: string;
  password: string;
  rePassword: string;
}
