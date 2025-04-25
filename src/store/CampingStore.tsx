import { create } from 'zustand';
import { campingService } from '../services/campingService';
import { CampingType } from '../types/camping';

interface SearchParams {
  [key: string]: any;
}

interface CampingStore {
  campings: CampingType[];
  isLoading: boolean;
  error: string | null;
  searchParams: SearchParams | null;
  fetchCampings: () => Promise<void>;
  searchCampings: (params: SearchParams) => Promise<void>;
}

export const useCampingStore = create<CampingStore>((set) => ({
  campings: [],
  isLoading: false,
  error: null,
  searchParams: null,

  fetchCampings: async () => {
    set({ isLoading: true, error: null });
    try {
      const campings = await campingService.fetchCampings();
      console.log('🔄 API Response:', campings);
      console.log('📦 Processed campings:', campings);
      
      set({ campings, isLoading: false });
    } catch (error: any) {
      console.error('❌ Store error:', error);
      set({ error: error.message, isLoading: false });
    }
  },

  searchCampings: async (params: SearchParams) => {
    set({ isLoading: true, error: null, searchParams: params });
    try {
      const campings = await campingService.searchCampings(params);
      set({ campings, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }

  },

}));