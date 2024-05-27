import { Box } from '@mui/material';

interface CenterProps {
  children: React.ReactNode;
}

const Center: React.FC<CenterProps> = ({ children }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      height={'100dvh'}
      paddingInline={1}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        textAlign={'center'}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Center;
