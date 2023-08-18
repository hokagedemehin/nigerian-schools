'use client';
import { ThemeProvider, createTheme } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HomepageScreen from '@/screens/Homepage';

export default function Home() {

  const theme = createTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl", "2xl"],
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
    palette: {
      mode: "light",
    },
  });

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <QueryClientProvider client={queryClient}>
            <HomepageScreen />
          </QueryClientProvider>
        </LocalizationProvider>
      </ThemeProvider>
  )
}
