'use client';

import Center from '@/shared/components/Center/Center';
import { Button } from '@mui/material';
import { useRouter } from 'next13-progressbar';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <Center>
      <h2>Erro interno</h2>

      <Button variant="contained" onClick={() => router.push('/carros')}>
        Tente novamente
      </Button>
    </Center>
  );
}
