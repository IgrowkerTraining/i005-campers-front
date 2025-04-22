import { create } from 'zustand';
import { userService } from '@/services/userService';
import { User, LoginCredentials, LoginResponse, RegisterCredentials } from '@/types/user';

interface UserStore {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isOwner: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  register: (credentials: RegisterCredentials) => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  token: localStorage.getItem('Campers-token'),
  isLoading: false,
  error: null,
  isOwner: localStorage.getItem('Campers-owner') === 'true',
  login: async (credentials: LoginCredentials) => {
    set({ isLoading: true, error: null });
    try {
      const response: LoginResponse = await userService.login(credentials);
      set({ 
        user: response.user,
        token: response.token,
        isOwner: response.owner,
        isLoading: false 
      });
      
      // Guardar todos los datos en localStorage
      localStorage.setItem('Campers-token', response.token);
      localStorage.setItem('Campers-user', JSON.stringify(response.user));
      localStorage.setItem('Campers-owner', String(response.owner));
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  logout: () => {
    set({ 
      user: null, 
      token: null,
      isOwner: false,
      error: null
    });
    // Limpiar todo el localStorage
    localStorage.removeItem('Campers-token');
    localStorage.removeItem('Campers-user');
    localStorage.removeItem('Campers-owner');
  },
  register: async (credentials: RegisterCredentials) => {
    set({ isLoading: true, error: null });
    try {
      await userService.register(credentials);
      set({ isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));