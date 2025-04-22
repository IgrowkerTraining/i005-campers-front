export interface Location {
  id: number;
  campingAddress: string;
  mapLink: string;
  city: string;
  country: string;
}

export interface Pricing {
  id: number;
  tarifa: string;
  pricePerNight: number;
  campingId: number;
}

export interface Amenity {
  id: number;
  name: string;
  available: boolean;
  icon: string;
}

export interface NearbyAttraction {
  id: number;
  name: string;
  type: string;
  distance: number;
  campingId: number;
}

export interface Media {
  id: number;
  url: string;
  type: string;
  campingId: number;
}

export interface LimitCamping {
  id: number;
  maxUsers: number;
  maxTents: number;
}

export interface CampingType {
  id: number;
  name: string;
  description: string;
  location: Location;
  contactPhone: string;
  media: Media[];
  pricing: Pricing[];
  amenities: Amenity[];
  limitCamping: LimitCamping;
  nearbyAttractions: NearbyAttraction[];
  createdAt: string;
  updatedAt: string;
}

export interface SearchParams {
  location?: string;
  dateFrom?: string;
  dateTo?: string;
  guests?: number;
}