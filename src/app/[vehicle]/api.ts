import { Option } from '@/app/[vehicle]/types';
import api from '@/services/apiBase';

export const getBrands = async (vehicle: string): Promise<Option[]> => {
  const response = await api.get(`/${vehicle}/marcas`);
  return response.data;
};

export const getModels = async (
  vehicle: string,
  brandId: string
): Promise<Option[]> => {
  const response = await api.get(`/${vehicle}/marcas/${brandId}/modelos`);
  return response.data.modelos;
};

export const getYears = async (
  vehicle: string,
  brandId: string,
  modelId: string
): Promise<Option[]> => {
  const response = await api.get(
    `/${vehicle}/marcas/${brandId}/modelos/${modelId}/anos`
  );
  return response.data;
};
