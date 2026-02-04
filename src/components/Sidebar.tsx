import { useState } from "react";
import { ChevronDown, ChevronRight, Box, Blocks, Server, Puzzle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface NavItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  planned?: boolean;
}

const minecraftNav: NavItem[] = [
  {
    title: "Spigot/Paper",
    icon: <Server className="w-4 h-4" />,
    children: [
      { title: "Plural", href: "#mc-spigot-plural" },
      { title: "Doughminationcord", href: "#mc-spigot-doughminationcord" },
      { title: "JailedDough", href: "#mc-spigot-jaileddough" },
      { title: "WingSync", href: "#mc-spigot-wingsync" },
    ],
  },
  {
    title: "Fabric",
    icon: <Box className="w-4 h-4" />,
    planned: true,
    children: [
      { title: "Plural", href: "#mc-fabric-plural" },
      { title: "Doughminationcord", href: "#mc-fabric-doughminationcord" },
      { title: "JailedDough", href: "#mc-fabric-jaileddough" },
      { title: "WingSync", href: "#mc-fabric-wingsync" },
    ],
  },
  {
    title: "Forge",
    icon: <Puzzle className="w-4 h-4" />,
    planned: true,
    children: [
      { title: "Plural", href: "#mc-forge-plural" },
      { title: "Doughminationcord", href: "#mc-forge-doughminationcord" },
      { title: "JailedDough", href: "#mc-forge-jaileddough" },
      { title: "WingSync", href: "#mc-forge-wingsync" },
    ],
  },
];

const hytaleNav: NavItem[] = [
  {
    title: "Mods",
    icon: <Puzzle className="w-4 h-4" />,
    children: [
      { title: "Plural", href: "#hytale-plural" },
      { title: "WingSync", href: "#hytale-wingsync", planned: true },
    ],
  },
];

interface NavSectionProps {
  item: NavItem;
  activeSection: string;
  onSelect: (href: string) => void;
}

const NavSection = ({ item, activeSection, onSelect }: NavSectionProps) => {
  const [isOpen, setIsOpen] = useState(!item.planned);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
          item.planned ? "text-muted-foreground hover:bg-accent/50" : "text-foreground hover:bg-accent"
        )}
      >
        {item.icon}
        <span className="flex-1 text-left flex items-center gap-2">
          {item.title}
          {item.planned && (
            <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4 border-muted-foreground/50 text-muted-foreground">
              Planned
            </Badge>
          )}
        </span>
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
      {isOpen && item.children && (
        <div className="ml-6 mt-1 space-y-1">
          {item.children.map((child) => (
            <button
              key={child.href}
              onClick={() => child.href && onSelect(child.href)}
              className={cn(
                "w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors flex items-center gap-2",
                activeSection === child.href
                  ? "nav-link-active bg-accent"
                  : "nav-link",
                item.planned && "opacity-60"
              )}
            >
              <span>{child.title}</span>
              {child.planned && (
                <Clock className="w-3 h-3 text-muted-foreground" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <aside className="w-64 h-[calc(100vh-64px)] bg-sidebar border-r border-sidebar-border overflow-y-auto scrollbar-thin sticky top-16">
      <div className="p-4">
        {/* Minecraft Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 px-3 py-2 mb-2">
            <Blocks className="w-5 h-5 text-minecraft" />
            <span className="font-semibold gradient-text-minecraft">Minecraft</span>
          </div>
          {minecraftNav.map((item) => (
            <NavSection
              key={item.title}
              item={item}
              activeSection={activeSection}
              onSelect={onSectionChange}
            />
          ))}
        </div>

        {/* Hytale Section */}
        <div>
          <div className="flex items-center gap-2 px-3 py-2 mb-2">
            <Box className="w-5 h-5 text-hytale" />
            <span className="font-semibold gradient-text-hytale">Hytale</span>
          </div>
          {hytaleNav.map((item) => (
            <NavSection
              key={item.title}
              item={item}
              activeSection={activeSection}
              onSelect={onSectionChange}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};
