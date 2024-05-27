'use client';

import { Option } from '@/app/[vehicle]/types';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getModels, getYears } from './api';

export interface FilterOptions {
  brands: Option[];
  models?: Option[];
  years?: Option[];
}

export interface Filters {
  brand?: Option;
  model?: Option;
  year?: Option;
}

interface FiltersContextProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  options: FilterOptions;
}

const FiltersContext = createContext<FiltersContextProps | undefined>(
  undefined
);

interface FiltersProvierProps {
  children: React.ReactNode;
  brands: Option[];
  vehicle: string;
}

export const FiltersProvider: React.FC<FiltersProvierProps> = ({
  children,
  brands,
  vehicle,
}) => {
  const [filters, setFilters] = useState<Filters>({
    brand: undefined,
    model: undefined,
    year: undefined,
  });
  const [options, setOptions] = useState<FilterOptions>({
    brands: brands,
    models: [],
    years: [],
  });

  useEffect(() => {
    (async () => {
      if (!filters.brand?.codigo) return;
      try {
        const models = await getModels(vehicle, filters.brand.codigo);
        setOptions((prev) => ({ ...prev, models }));
      } catch (error) {
        console.error('Erro ao buscar modelos:', error);
      }
    })();
  }, [filters.brand?.codigo, vehicle]);

  useEffect(() => {
    (async () => {
      if (!filters.brand?.codigo) return;
      if (!filters.model?.codigo) return;
      try {
        const years = await getYears(
          vehicle,
          filters.brand.codigo,
          filters.model.codigo
        );
        setOptions((prev) => ({ ...prev, years }));
      } catch (error) {
        console.error('Erro ao buscar anos:', error);
      }
    })();
  }, [filters.brand?.codigo, filters.model?.codigo, vehicle]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters, options }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = (): FiltersContextProps => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};
