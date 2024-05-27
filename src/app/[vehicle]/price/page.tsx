import Center from '@/shared/components/Center/Center';
import { Box } from '@mui/material';
import { getPrice } from './api';

interface PageProps {
  params: {
    vehicle: string;
  };
  searchParams: {
    brand: string;
    model: string;
    year: string;
  };
}

export default async function VehiclePrice({
  params: { vehicle },
  searchParams: { brand, model, year },
}: PageProps) {
  const price = await getPrice(vehicle, brand, model, year);

  return (
    <Box bgcolor={'#DCF5F2'}>
      <Center>
        <h1
          style={{
            fontSize: 25,
            marginBottom: 25,
          }}
        >
          Tabela Fipe: Preço {price.Marca} {price.Modelo} {price.AnoModelo}
        </h1>
        <Box
          bgcolor={'#00a699'}
          color={'white'}
          padding={'8px 16px'}
          borderRadius={10}
          fontSize={22}
          fontWeight={'bold'}
        >
          <span id="price">{price.Valor}</span>
        </Box>
        <p style={{ fontSize: 12, color: 'gray', marginTop: 20 }}>
          Este é o preço de compra do veículo
        </p>
      </Center>
    </Box>
  );
}
