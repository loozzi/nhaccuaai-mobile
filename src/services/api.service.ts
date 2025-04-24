import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiInstance: AxiosInstance = axios.create({
  baseURL: 'http://10.0.2.2:5000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = await AsyncStorage.getItem('refresh_token');
        const response = await apiInstance.post('/auth/refresh-token', {
          token: refreshToken,
        });
        const {token} = response.data;
        await AsyncStorage.setItem('access_token', token);

        originalRequest.headers.Authorization = `Bearer ${token}`;
        return apiInstance(originalRequest);
      } catch (error) {
        await AsyncStorage.removeItem('access_token');
        await AsyncStorage.removeItem('refresh_token');

        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

class ApiService {
  private apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = apiInstance;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.apiInstance.get(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.apiInstance.post(
      url,
      data,
      config,
    );
    return response.data;
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.apiInstance.put(
      url,
      data,
      config,
    );
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.apiInstance.delete(
      url,
      config,
    );
    return response.data;
  }
}

export default new ApiService();
