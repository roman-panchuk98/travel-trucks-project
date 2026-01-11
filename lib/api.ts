import { Camper, CamperHttpResponse, CampersQueryParams } from "@/types/camper";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const getAllCampers = async (
  params: CampersQueryParams
): Promise<CamperHttpResponse> => {
  const response = await axios.get<CamperHttpResponse>("", { params });
  return response.data;
};

export const getCamperById = async (id: string): Promise<Camper> => {
  const response = await axios.get<Camper>(`/${id}`);
  return response.data;
};
