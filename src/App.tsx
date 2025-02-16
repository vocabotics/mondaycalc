import { ThemeProvider } from '@/components/theme-provider';
import { Calculator } from '@/components/Calculator';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Calculator />
      </div>
    </ThemeProvider>
  );
}
