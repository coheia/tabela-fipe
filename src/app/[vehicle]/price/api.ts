import { VehiclePrice } from '@/app/[vehicle]/types';
import api from '@/services/apiBase';

export const getPrice = async (
  vehicle: string,
  brandId: string,
  modelId: string,
  yearId: string
): Promise<VehiclePrice> => {
  const response = await api.get(
    `/${vehicle}/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`
  );
  return response.data;
};
