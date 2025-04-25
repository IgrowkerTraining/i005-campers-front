import axios from 'axios';
import { CampingType, SearchParams } from '@/types/camping';

const API_URL = 'https://igrowker-campers.onrender.com/api/v1';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Add request interceptor to add authorization header
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('Campers-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// interface ApiResponse<T> {
//   data: T[];
//   meta: {
//     total: number;
//     page: number;
//     limit: number;
//     totalPages: number;
//   };
// }

export const campingService = {
  fetchCampings: async (): Promise<CampingType[]> => {
    try {
      const response = await axiosInstance.get('/campings/');
      console.log('🌐 API raw response:', response);

      // Extract the data array from the response
      const campings = response.data.data;
      console.log('✨ Extracted campings:', campings);

      return campings;
    } catch (error: any) {
      console.error('🚫 Service error:', error);
      throw new Error(error.response?.data?.message || 'Error fetching campings');
    }
  },

  fetchCampingById: async (id: number): Promise<CampingType> => {
    try {
      const response = await axiosInstance.get(`/campings/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Error fetching camping');
    }
  },

  searchCampings: async (searchParams: SearchParams): Promise<CampingType[]> => {
    try {
      const response = await axiosInstance.get('/campings/search', {
        params: searchParams
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Error searching campings');
    }
  },

  // funcion para crear un camping
  
  // createCamping: async (createCampingDto: string, imageFiles: File[]): Promise<CampingType> => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('createCampingDto', JSON.stringify(createCampingDto));

  //     imageFiles.forEach((file) => {
  //       formData.append('files', file);
  //     });

  //     const response = await axiosInstance.post('/campings', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     console.log('Camping creado:', response.data);
  //     console.log('Imágenes subidas:', imageFiles.map(file => file.name));

  //     return response.data;
  //   } catch (error: any) {
  //     console.error('🚫 Service error (POST):', error);
  //     throw new Error(error.response?.data?.message || 'Error creating camping');
  //   }
  // },

};

