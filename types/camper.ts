export type CamperForm = "alcove" | "fullyIntegrated" | "panelTruck";

export type Transmission = "automatic" | "manual";

export type Engine = "diesel" | "petrol";

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: CamperForm;
  transmission: Transmission;
  engine: Engine;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  gallery: CamperImage[];
  reviews: CamperReview[];
}

export interface CamperImage {
  thumb: string;
  original: string;
}

export interface CamperReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface CamperHttpResponse {
  total: number;
  items: Camper[];
}

export interface CampersQueryParams {
  page?: number;
  limit?: number;
  location?: string;
  form?: CamperForm;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  water?: boolean;
  gas?: boolean;
}

export interface CampersState {
  campers: Camper[];
  total: number;
  page: number;
  limit: number;
  filters: CampersQueryParams;
  favorites: Camper[];
  isLoading: boolean;
  error: string | null;
  setCampers: (campers: Camper[], total: number) => void;
  appendCampers: (campers: Camper[]) => void;
  setFilters: (filters: CampersQueryParams) => void;
  resetCampers: () => void;
  nextPage: () => void;
  addToFavorites: (camper: Camper) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
  setLoading: (value: boolean) => void;
  setError: (message: string | null) => void;
}
