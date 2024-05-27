import { FiltersProvider } from './FiltersContext';
import { getBrands } from './api';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    vehicle: string;
  };
}

export default async function VehicleLayout({
  params: { vehicle },
  children,
}: LayoutProps) {
  const brands = await getBrands(vehicle);

  return (
    <FiltersProvider brands={brands} vehicle={vehicle}>
      {children}
    </FiltersProvider>
  );
}
