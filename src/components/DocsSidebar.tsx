import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Box, Blocks, Server, Puzzle, Clock, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface NavItem {
  title: string;
  href: string;
  planned?: boolean;
}

interface NavSection {
  title: string;
  icon: React.ReactNode;
  basePath: string;
  planned?: boolean;
  items: NavItem[];
}

const minecraftNav: NavSection[] = [
  {
    title: "Spigot/Paper",
    icon: <Server className="w-4 h-4" />,
    basePath: "/minecraft/paper",
    items: [
      { title: "Plural", href: "/minecraft/paper/plural" },
      { title: "Doughminationcord", href: "/minecraft/paper/doughminationcord" },
      { title: "JailedDough", href: "/minecraft/paper/jaileddough" },
      { title: "WingSync", href: "/minecraft/paper/wingsync" },
    ],
  },
  {
    title: "Fabric",
    icon: <Box className="w-4 h-4" />,
    basePath: "/minecraft/fabric",
    planned: true,
    items: [
      { title: "Plural", href: "/minecraft/fabric/plural" },
      { title: "Doughminationcord", href: "/minecraft/fabric/doughminationcord" },
      { title: "JailedDough", href: "/minecraft/fabric/jaileddough" },
      { title: "WingSync", href: "/minecraft/fabric/wingsync" },
    ],
  },
  {
    title: "Forge",
    icon: <Puzzle className="w-4 h-4" />,
    basePath: "/minecraft/forge",
    planned: true,
    items: [
      { title: "Plural", href: "/minecraft/forge/plural" },
      { title: "Doughminationcord", href: "/minecraft/forge/doughminationcord" },
      { title: "JailedDough", href: "/minecraft/forge/jaileddough" },
      { title: "WingSync", href: "/minecraft/forge/wingsync" },
    ],
  },
];

const hytaleNav: NavSection[] = [
  {
    title: "Mods",
    icon: <Puzzle className="w-4 h-4" />,
    basePath: "/hytale",
    items: [
      { title: "Plural", href: "/hytale/plural" },
      { title: "WingSync", href: "/hytale/wingsync", planned: true },
    ],
  },
];

interface NavSectionComponentProps {
  section: NavSection;
  currentPath: string;
  onNavigate?: () => void;
}

const NavSectionComponent = ({ section, currentPath, onNavigate }: NavSectionComponentProps) => {
  const isActive = currentPath.startsWith(section.basePath);
  const [isOpen, setIsOpen] = useState(isActive || !section.planned);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
          section.planned ? "text-muted-foreground hover:bg-accent/50" : "text-foreground hover:bg-accent"
        )}
      >
        {section.icon}
        <span className="flex-1 text-left flex items-center gap-2">
          {section.title}
          {section.planned && (
            <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4 border-muted-foreground/50 text-muted-foreground">
              Planned
            </Badge>
          )}
        </span>
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="ml-6 mt-1 space-y-1">
          {section.items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onNavigate}
              className={cn(
                "w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors flex items-center gap-2",
                currentPath === item.href
                  ? "nav-link-active bg-accent"
                  : "nav-link",
                section.planned && "opacity-60"
              )}
            >
              <span>{item.title}</span>
              {item.planned && (
                <Clock className="w-3 h-3 text-muted-foreground" />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

interface DocsSidebarProps {
  currentGame: string;
  currentLoader: string;
  currentMod: string;
  onNavigate?: () => void;
}

export const DocsSidebar = ({ onNavigate }: DocsSidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-64 h-[calc(100vh-64px)] bg-sidebar border-r border-sidebar-border overflow-y-auto scrollbar-thin sticky top-16">
      <div className="p-4">
        {/* Home Link */}
        <Link
          to="/"
          onClick={onNavigate}
          className="flex items-center gap-2 px-3 py-2 mb-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Minecraft Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 px-3 py-2 mb-2">
            <Blocks className="w-5 h-5 text-minecraft" />
            <span className="font-semibold gradient-text-minecraft">Minecraft</span>
          </div>
          {minecraftNav.map((section) => (
            <NavSectionComponent
              key={section.title}
              section={section}
              currentPath={currentPath}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* Hytale Section */}
        <div>
          <div className="flex items-center gap-2 px-3 py-2 mb-2">
            <Box className="w-5 h-5 text-hytale" />
            <span className="font-semibold gradient-text-hytale">Hytale</span>
          </div>
          {hytaleNav.map((section) => (
            <NavSectionComponent
              key={section.title}
              section={section}
              currentPath={currentPath}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};
