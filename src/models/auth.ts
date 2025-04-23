export interface TokenModel {
  token: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  user: {
    id: number;
    email: string;
    name: string;
    avatar?: string;
  };
}
