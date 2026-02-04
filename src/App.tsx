import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "@/pages/Index";
import DocsLayout from "@/pages/DocsLayout";
import LicensePage from "@/pages/LicensePage";
import NotFound from "@/pages/NotFound";
import ComingSoon from "@/pages/ComingSoon";
import Crafts from "@/pages/Crafts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/minecraft/:loader/:mod" element={<DocsLayout />} />
            <Route path="/hytale/:mod" element={<DocsLayout />} />
            <Route path="/legal/license" element={<LicensePage />} />
            <Route path="/legal/minecraft/terms" element={<ComingSoon />} />
            <Route path="/legal/minecraft/privacy" element={<ComingSoon />} />
            <Route path="/legal/hytale/terms" element={<ComingSoon />} />
            <Route path="/legal/hytale/privacy" element={<ComingSoon />} />
            <Route path="/minecraft/crafts" element={<Crafts />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
