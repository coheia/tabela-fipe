'use client';

import { useFilters } from '@/app/[vehicle]/FiltersContext';
import { Option } from '@/app/[vehicle]/types';
import {
    Autocomplete,
    Box,
    Button,
    FormControl,
    Paper,
    TextField,
} from '@mui/material';
import { useParams } from 'next/navigation';
import { useRouter } from 'next13-progressbar';
import { SyntheticEvent, useState } from 'react';

interface FipePriceFormProps {}

const FipePriceForm: React.FC<FipePriceFormProps> = () => {
  const router = useRouter();
  const params = useParams();
  const [submitted, setSubmitted] = useState(false);
  const { filters, setFilters, options } = useFilters();

  const handleBrandChange = (
    event: SyntheticEvent<Element, Event>,
    value: Option | null
  ) => {
    if (!value) {
      setFilters({});
      return;
    }

    setFilters({ brand: value });
  };

  const handleModelChange = (
    event: SyntheticEvent<Element, Event>,
    value: Option | null
  ) => {
    if (!value) {
      setFilters((prevFilters) => ({
        brand: prevFilters.brand,
      }));
      return;
    }

    setFilters((prevFilters) => ({
      brand: prevFilters.brand,
      model: value,
      year: undefined,
    }));
  };

  const handleYearChange = (
    event: SyntheticEvent<Element, Event>,
    value: Option | null
  ) => {
    if (!value) {
      setFilters((prevFilters) => ({ ...prevFilters }));
      return;
    }

    setFilters((prevFilters) => ({ ...prevFilters, year: value }));
  };

  const isBrandInvalid = !filters.brand && submitted;
  const isModelInvalid = !filters.model && submitted;
  const isYearInvalid = !filters.model && submitted;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    if (!filters.brand) return;
    if (!filters.model) return;
    if (!filters.year) return;

    const queryVehicle = new URLSearchParams({
      brand: filters.brand?.codigo,
      model: filters.model?.codigo,
      year: filters.year?.codigo,
    });

    router.push(`/${params.vehicle}/price/?${queryVehicle.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <h1>Tabela Fipe</h1>
        <h2>Consulte o valor de um veículo de forma gratuita</h2>
      </Box>
      <Paper
        style={{
          maxWidth: 500,
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Box
          padding={5}
          display={'flex'}
          flexDirection={'column'}
          gap={2}
          alignItems={'center'}
        >
          <FormControl fullWidth>
            <Autocomplete
              disablePortal
              id="brand-autocomplete"
              options={options.brands}
              noOptionsText='Nenhum resultado encontrado'
              getOptionLabel={(option) => option.nome}
              onChange={handleBrandChange}
              value={filters.brand || null}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={isBrandInvalid}
                  helperText={
                    isBrandInvalid ? 'Preencha a marca do veículo' : undefined
                  }
                  label="Marca"
                />
              )}
            />
          </FormControl>

          <FormControl fullWidth>
            <Autocomplete
              disablePortal
              id="model-autocomplete"
              options={options.models || []}
              getOptionLabel={(option) => option.nome}
              onChange={handleModelChange}
              value={filters.model || null}
              noOptionsText='Nenhum resultado encontrado'
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={isModelInvalid}
                  helperText={
                    isModelInvalid ? 'Preencha o modelo do veículo' : undefined
                  }
                  label="Modelo"
                />
              )}
              disabled={!filters.brand}
            />
          </FormControl>

          {filters.model && (
            <FormControl fullWidth>
              <Autocomplete
                disablePortal
                id="year-autocomplete"
                options={options.years || []}
                getOptionLabel={(option) => option.nome}
                onChange={handleYearChange}
                noOptionsText='Nenhum resultado encontrado'
                value={filters.year || null}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={isYearInvalid}
                    helperText={
                      isYearInvalid ? 'Preencha o ano do veículo' : undefined
                    }
                    label="Ano"
                  />
                )}
              />
            </FormControl>
          )}

          <Button
            id="btn-submit"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Consultar preço
          </Button>
        </Box>
      </Paper>
    </form>
  );
};

export default FipePriceForm;
