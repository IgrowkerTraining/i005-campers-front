import axios from 'axios';
import { LoginCredentials, LoginResponse, RegisterCredentials, User } from '@/types/user';

const API_URL = 'https://igrowker-campers.onrender.com/api/v1';

export const userService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, credentials);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Error en el login');
    }
  },

  register: async (credentials: RegisterCredentials): Promise<User> => {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, credentials);
      if (response.status === 201) {
        return response.data;
      }
      throw new Error('Error en el registro');
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Error en el registro');
    }
  }
};