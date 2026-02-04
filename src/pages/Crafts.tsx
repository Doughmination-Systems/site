import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gavel, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Craft categories
const craftCategories = {
  mobs: [
    "allay",
    "armadillo",
    "axolotl",
    "bat",
    "bee",
    "blaze",
    "bogged",
    "breeze",
    "camel",
    "cat",
    "cave_spider",
    "chicken",
    "cod",
    "cow",
    "creeper",
    "dolphin",
    "donkey",
    "drowned",
    "elder_guardian",
    "ender_dragon",
    "enderman",
    "endermite",
    "evoker",
    "fox",
    "frog",
    "ghast",
    "glow_squid",
    "goat",
    "guardian",
    "hoglin",
    "horse",
    "husk",
    "iron_golem",
    "llama",
    "magma_cube",
    "mooshroom",
    "mule",
    "ocelot",
    "panda",
    "parrot",
    "phantom",
    "pig",
    "piglin",
    "piglin_brute",
    "pillager",
    "polar_bear",
    "pufferfish",
    "rabbit",
    "ravenger",
    "salmon",
    "sheep",
    "shulker",
    "silverfish",
    "skeleton",
    "skeleton_horse",
    "slime",
    "sniffer",
    "snow_golem",
    "spider",
    "squid",
    "stray",
    "strider",
    "tadpole",
    "trader_llama",
    "tropical_fish",
    "turtle",
    "vex",
    "villager",
    "vindicator",
    "wandering_trader",
    "warden",
    "witch",
    "wither",
    "wither_skeleton",
    "wolf",
    "zoglin",
    "zombie",
    "zombie_horse",
    "zombie_villager",
    "zombified_piglin",
  ],
  potions: [
    "growth_potion",
    "shrink_potion",
  ],
};

// Combine all crafts into a single array with categories
const allCrafts = [
  ...craftCategories.mobs.map(name => ({ name, category: 'Mob Spawn Eggs' })),
  ...craftCategories.potions.map(name => ({ name, category: 'Potions' })),
].sort((a, b) => a.name.localeCompare(b.name));

// Helper function to format craft names for display
const formatCraftName = (craftName: string): string => {
  return craftName
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Crafts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter crafts based on search query and category
  const filteredCrafts = useMemo(() => {
    let crafts = allCrafts;
    
    // Filter by category
    if (activeCategory !== "all") {
      crafts = crafts.filter(craft => craft.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      crafts = crafts.filter(craft => 
        craft.name.toLowerCase().includes(query) || 
        formatCraftName(craft.name).toLowerCase().includes(query) ||
        craft.category.toLowerCase().includes(query)
      );
    }
    
    return crafts;
  }, [searchQuery, activeCategory]);

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero">
        <div className="container py-12 md:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Gavel className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Doughminationcord Crafts</h1>
              <p className="text-muted-foreground">All Available Custom Recipes</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse all custom crafts available in Doughminationcord, including mob spawn eggs and custom potions.
          </p>
        </div>
      </section>

      {/* Search Bar and Category Tabs */}
      <section className="container py-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for a craft..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
          
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All ({allCrafts.length})</TabsTrigger>
              <TabsTrigger value="Mob Spawn Eggs">Mobs ({craftCategories.mobs.length})</TabsTrigger>
              <TabsTrigger value="Potions">Potions ({craftCategories.potions.length})</TabsTrigger>
            </TabsList>
          </Tabs>

          <p className="text-sm text-muted-foreground text-center">
            {filteredCrafts.length} {filteredCrafts.length === 1 ? 'craft' : 'crafts'} found
          </p>
        </div>
      </section>

      {/* Crafts Grid */}
      <section className="container py-8 md:py-12">
        {filteredCrafts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">No crafts found matching "{searchQuery}"</p>
            <Button variant="outline" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredCrafts.map((craft, index) => (
              <div
                key={craft.name}
                className="group rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-hover opacity-0 animate-fade-in"
                style={{ animationDelay: `${Math.min(index * 30, 500)}ms` }}
              >
                <div className="aspect-square bg-muted/30 flex items-center justify-center p-4 min-h-[200px]">
                  <img
                    src={`/assets/crafts/${craft.name}_craft.png`}
                    alt={`${formatCraftName(craft.name)} craft recipe`}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {formatCraftName(craft.name)}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {craft.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Crafts;