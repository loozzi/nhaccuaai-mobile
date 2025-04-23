import apiService from './api.service';
import {TokenModel, AuthResponse} from '../models/auth';

class AuthService {
  private readonly baseUrl = '/auth';

  /**
   * Sign in with token
   * @param tokenData Token model containing token
   * @returns Authentication response with tokens and user info
   */
  async signIn(tokenData: TokenModel): Promise<AuthResponse> {
    return apiService.post<AuthResponse>(`${this.baseUrl}/sign-in`, tokenData);
  }

  /**
   * Sign up with token
   * @param tokenData Token model containing token
   * @returns Authentication response
   */
  async signUp(tokenData: TokenModel): Promise<AuthResponse> {
    return apiService.post<AuthResponse>(`${this.baseUrl}/sign-up`, tokenData);
  }

  /**
   * Refresh access token
   * @param tokenData Token model containing refresh token
   * @returns New authentication tokens
   */
  async refreshToken(tokenData: TokenModel): Promise<AuthResponse> {
    return apiService.post<AuthResponse>(
      `${this.baseUrl}/refresh-token`,
      tokenData,
    );
  }
}

export default new AuthService();
