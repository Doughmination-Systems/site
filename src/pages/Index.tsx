import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Blocks, Box, Users, Link2, Lock, Settings, Clock } from "lucide-react";

const minecraftPlugins = [
  {
    name: "Plural",
    description: "Allowing plural systems to be included in games",
    icon: Users,
    href: "/minecraft/paper/plural",
    available: true,
  },
  {
    name: "Doughminationcord",
    description: "Comprehensive server essentials plugin",
    icon: Settings,
    href: "/minecraft/paper/doughminationcord",
    available: true,
  },
  {
    name: "JailedDough",
    description: "Jail and punishment system for servers",
    icon: Lock,
    href: "/minecraft/paper/jaileddough",
    available: true,
  },
  {
    name: "WingSync",
    description: "Discord-Minecraft Whitelisting",
    icon: Link2,
    href: "/minecraft/paper/wingsync",
    available: true,
  },
];

const hytalePlugins = [
  {
    name: "Plural",
    description: "Allowing plural systems to be included in games",
    icon: Users,
    href: "/hytale/plural",
    available: true,
  },
  {
    name: "WingSync",
    description: "Discord-Hytale Whitelisting",
    icon: Link2,
    href: "/hytale/wingsync",
    planned: true,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text-minecraft">Doughmination</span>{" "}
              <span className="text-foreground">Modding</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Documentation for Minecraft and Hytale plugins. Server essentials, 
              Discord integration, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="gap-2">
                <Link to="/minecraft/paper/plural">
                  Go to Docs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://github.com/doughmination-systems" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Minecraft Plugins */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Blocks className="w-8 h-8 text-minecraft" />
            <h2 className="text-3xl font-bold gradient-text-minecraft">Minecraft</h2>
            <Badge variant="outline" className="border-minecraft text-minecraft">
              Spigot/Paper
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {minecraftPlugins.map((plugin) => (
              <Link key={plugin.name} to={plugin.href}>
                <Card className="h-full border-border hover:border-minecraft/50 transition-colors group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <plugin.icon className="w-8 h-8 text-minecraft group-hover:scale-110 transition-transform" />
                      {plugin.available && (
                        <Badge className="bg-minecraft/20 text-minecraft border-0 text-xs">
                          Available
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{plugin.name}</CardTitle>
                    <CardDescription>{plugin.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {/* Planned loaders */}
          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Fabric and Forge versions planned</span>
          </div>
        </div>
      </section>

      {/* Hytale Plugins */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Box className="w-8 h-8 text-hytale" />
            <h2 className="text-3xl font-bold gradient-text-hytale">Hytale</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {hytalePlugins.map((plugin) => (
              <Link key={plugin.name} to={plugin.href}>
                <Card className={`h-full transition-colors group cursor-pointer ${
                  plugin.planned 
                    ? "border-border/50 opacity-70" 
                    : "border-border hover:border-hytale/50"
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <plugin.icon className={`w-8 h-8 group-hover:scale-110 transition-transform ${
                        plugin.planned ? "text-muted-foreground" : "text-hytale"
                      }`} />
                      {plugin.planned ? (
                        <Badge variant="outline" className="border-muted-foreground text-muted-foreground text-xs">
                          Planned
                        </Badge>
                      ) : (
                        <Badge className="bg-hytale/20 text-hytale border-0 text-xs">
                          Available
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{plugin.name}</CardTitle>
                    <CardDescription>{plugin.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
