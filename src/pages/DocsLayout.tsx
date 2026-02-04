import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsSidebar } from "@/components/DocsSidebar";
import { DocContent } from "@/components/DocContent";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const DocsLayout = () => {
  const { loader, mod } = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine the game based on the route
  const game = loader ? "minecraft" : "hytale";
  const currentLoader = loader || "";
  const currentMod = mod || "";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuClick={() => setMobileMenuOpen(true)} />
      
      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <DocsSidebar 
            currentGame={game}
            currentLoader={currentLoader}
            currentMod={currentMod}
          />
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="w-64 p-0 bg-sidebar">
            <DocsSidebar 
              currentGame={game}
              currentLoader={currentLoader}
              currentMod={currentMod}
              onNavigate={() => setMobileMenuOpen(false)}
            />
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <DocContent 
          game={game}
          loader={currentLoader}
          mod={currentMod}
        />
      </div>

      <Footer />
    </div>
  );
};

export default DocsLayout;
