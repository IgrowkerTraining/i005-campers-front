import { create } from 'zustand';
//import axios from 'axios';
import Campings from '../data/campingsAPI.json';


interface Location {
  id: number;
  city: string;
  region: string;
  country: string;
  coordinates: string; // JSON string con latitud y longitud
}

interface Pricing {
  id: number;
  pricePerNight: number;
  season: string;
  campingId: number;
}

interface Amenity {
  id: number;
  name: string;
  available: boolean;
}

interface NearbyAttraction {
  id: number;
  name: string;
  type: string;
  distance: number; // Distancia en kilómetros
  campingId: number;
}

export interface CampingType {
  id: number;
  name: string;
  description: string;
  locationId: number;
  nearNature: string[]; // Lista de elementos como "playa", "bosque"
  limitCampingId: number;
  userId: string;
  createdAt: string; // Fecha en formato ISO
  updatedAt: string; // Fecha en formato ISO
  location: Location;
  pricing: Pricing[];
  amenities: Amenity[];
  nearbyAttractions: NearbyAttraction[];
}

interface CampingStore {
  campings: CampingType[];
  isLoading: boolean;
  error: string | null;
  fetchCampings: () => Promise<void>;
}

export const useCampingStore = create<CampingStore>((set) => ({
  campings: [],
  isLoading: false,
  error: null,
  fetchCampings: async () => {
    set({ isLoading: true, error: null });
    try {
      //const response = await axios.get('/data/campingsAPI.json');        
      set({ campings: Campings, isLoading: false });
    } catch (error: any) {
      set({ error: error.message || 'Error fetching campings', isLoading: false });
    }
  },
}));