import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DownloadButtonProps {
  game: "minecraft" | "hytale";
  mod: string;
}

const minecraftPlatforms = [
  { name: "Modrinth", icon: "🟢", url: () => `https://modrinth.com/` },
  { name: "CurseForge", icon: "🔶", url: () => `https://www.curseforge.com/` },
];

const hytalePlatforms = [
  { name: "ModTale", icon: "🎮", url: () => `https://modtale.net/mod/plural` },
  { name: "Orbis", icon: "🌐", url: () => `https://www.orbis.place/` },
  { name: "Picanik", icon: "🎨", url: () => `https://www.picanik.gg/` },
  { name: "CurseForge", icon: "🔶", url: () => `https://www.curseforge.com/hytale/mods/doughmination-plural` },
];

export const DownloadButton = ({ game, mod }: DownloadButtonProps) => {
  const platforms = game === "minecraft" ? minecraftPlatforms : hytalePlatforms;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          className={`gap-2 ${
            game === "minecraft" 
              ? "bg-minecraft hover:bg-minecraft/90 text-minecraft-foreground" 
              : "bg-hytale hover:bg-hytale/90 text-hytale-foreground"
          }`}
        >
          <Download className="w-4 h-4" />
          Download
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-popover border-border z-50">
        {platforms.map((platform) => (
          <DropdownMenuItem key={platform.name} asChild>
            <a
              href={platform.url()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 cursor-pointer"
            >
              <span>{platform.icon}</span>
              <span>{platform.name}</span>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
