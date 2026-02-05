import { CodeBlock } from "@/components/CodeBlock";
import { DownloadButton } from "@/components/DownloadButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; 
import { Gavel, Download, Settings, Terminal, Rocket, Shield, MessageSquare, Link2, Clock } from "lucide-react";

interface DocContentProps {
  game: string;
  loader: string;
  mod: string;
}

interface ContentItem {
  title: string;
  badge: string;
  loader?: string;
  badgeVariant: "hytale" | "minecraft";
  planned?: boolean;
  content: React.ReactNode;
}

const pluralSpigotContent: ContentItem = {
  title: "Plural",
  badge: "Minecraft",
  loader: "Spigot/Paper",
  badgeVariant: "minecraft",
  content: (
    <>
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
        Plural is a plugin allowing system to proxy their headmates within games.
      </p>

      <Card className="mb-6 border-minecraft/20 bg-minecraft/5">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-minecraft" />
            <CardTitle className="text-base">Installation</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Download the latest version of Plural from above</li>
            <li>Place the .jar file in your <code className="text-foreground bg-muted px-1 rounded">plugins</code> folder</li>
            <li>Restart your server</li>
          </ol>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Terminal className="w-6 h-6" />
        Commands
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold">Command</th>
              <th className="text-left py-3 px-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/system create</td>
              <td className="py-3 px-4">Create your system</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/system rename</td>
              <td className="py-3 px-4">Rename your system</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/system remove</td>
              <td className="py-3 px-4">Remove your system</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/front add</td>
              <td className="py-3 px-4">Add a new front</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/front set</td>
              <td className="py-3 px-4">Set the current front</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/front delete</td>
              <td className="py-3 px-4">Delete a front</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/front clear</td>
              <td className="py-3 px-4">Clear who is fronting</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Shield className="w-6 h-6" />
        Permissions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold">Permission</th>
              <th className="text-left py-3 px-4 font-semibold">Description</th>
              <th className="text-left py-3 px-4 font-semibold">Default</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">plural.system</td>
              <td className="py-3 px-4">Allow users to manage their system</td>
              <td className="py-3 px-4">All</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">plural.front</td>
              <td className="py-3 px-4">Allow users to manage their fronts</td>
              <td className="py-3 px-4">All</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Rocket className="w-6 h-6" />
        Roadmap
      </h2>

      <div className="space-y-4">
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Cloud Syncing
              </CardTitle>
              <Badge className="bg-primary/20 text-primary border-0">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Sync player data across multiple servers automatically. Configure once 
              and have settings follow players across any server running Plural with cloud sync enabled.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  ),
};

const doughminationcordSpigotContent: ContentItem = {
  title: "Doughminationcord",
  badge: "Minecraft",
  loader: "Spigot/Paper",
  badgeVariant: "minecraft",
  content: (
    <>
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
        Doughminationcord is a comprehensive server essentials plugin that provides core functionality 
        for managing your Minecraft server.
      </p>

      <Card className="mb-6 border-minecraft/20 bg-minecraft/5">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-minecraft" />
            <CardTitle className="text-base">Installation</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Download the latest version</li>
            <li>Place the .jar file in your <code className="text-foreground bg-muted px-1 rounded">plugins</code> folder</li>
            <li>Restart your server</li>
            <li>Configure as needed</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="mb-6 border-minecraft/20 bg-minecraft/5">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Gavel className="w-5 h-5 text-minecraft" />
            <CardTitle className="text-base">Crafts</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            View all crafting recipes available in Doughminationcord.
          </p>
          <Button asChild className="w-full sm:w-auto">
            <Link to="/minecraft/crafts">
              View All Crafts
            </Link>
          </Button>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Settings className="w-6 h-6" />
        Configuration
      </h2>

      <CodeBlock
        language="yaml"
        filename="plugins/Doughminationcord/config.yml"
        code={`plugin-info:
  version: 5.0.0
  authors:
    - "Doughmination"
  official-repo: "https://modding.doughmination.co.uk"

flight:
  allflight: false # Enable or disable global flight for all players
  base-radius: 100 # Radius around base where flight is allowed
  communal-zones:
    enabled: true # Enable or disable communal fly zones

veinminer:
  enabled: true # Enable or disable vein-mining globally
  tree-remover:
    max-blocks: 100 # Maximum number of blocks to vein-mine for trees
    max-height: 30 # Maximum vertical height for tree vein-mining
  ore-remover:
    max-blocks: 100 # Maximum number of blocks to vein-mine for ores
    max-height: 30 # Maximum vertical height for ore vein-mining

spawn:
  world: "world" # Default world where the spawn is located
  x: 0.0 # X coordinate of the spawn
  y: 65.0 # Y coordinate of the spawn
  z: 0.0 # Z coordinate of the spawn
  yaw: 0.0 # Orientation (horizontal)
  pitch: 0.0 # Orientation (vertical)

base-teleport:
  cooldown-hours: 1 # Cooldown period to set bases

# Player bases and cooldowns
bases: {}
base.cooldowns: {}

sounds:
  base: "ENTITY_ENDERMAN_TELEPORT" # Sound to play when teleporting to base

playtime-tracking:
  enabled: true # Enable or disable playtime tracking

kitty-command:
  messages: # Customize kitty command responses
    - "mrrp!"
    - "bwaa!"
    - "uwu X3 rwar *pounces on you*"
    - "nya!"
    - "meow"
    - ":3"
    - "rwar"
    - "X3"

permissions:
  enable-setspawn: true # Enable or disable /setspawn permissions
  enable-visitbase: true # Enable or disable permission checks for visiting bases
  veinminer:
    enable-trees: true # Enable VeinMiner for trees
    enable-ores: true # Enable VeinMiner for ores

jail:
  enable-jail-checks: true # Enable jail checks before teleporting or setting bases
`}
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Terminal className="w-6 h-6" />
        Commands
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold">Command</th>
              <th className="text-left py-3 px-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/ecban</td>
              <td className="py-3 px-4">Ban a user</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/unban</td>
              <td className="py-3 px-4">Unbans a user</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/banlist</td>
              <td className="py-3 px-4">List all bans</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/recipes</td>
              <td className="py-3 px-4">Get the url for all recipes</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/version</td>
              <td className="py-3 px-4">Get plugin version</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/setspawn</td>
              <td className="py-3 px-4">Set server spawn</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/spawn</td>
              <td className="py-3 px-4">Tp to spawn</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/doughreload</td>
              <td className="py-3 px-4">Reload the plugin</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/tpask</td>
              <td className="py-3 px-4">Ask to tp to a player</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/tpaccept</td>
              <td className="py-3 px-4">Accept a tp request</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/tpdeny</td>
              <td className="py-3 px-4">Deny a tp request</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/playtime</td>
              <td className="py-3 px-4">Get your server playtime</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/dough</td>
              <td className="py-3 px-4">Get the help page up</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/setbase</td>
              <td className="py-3 px-4">Set your base location</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/base</td>
              <td className="py-3 px-4">Tp to your base</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/visitbase</td>
              <td className="py-3 px-4">Tp to someone else's base (admin)</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/kiss</td>
              <td className="py-3 px-4">Kiss another user</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/kitty</td>
              <td className="py-3 px-4">Meow mrrp nya!</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/veinminer</td>
              <td className="py-3 px-4">Toggles veinminer</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/basefly</td>
              <td className="py-3 px-4">Toggle flight around your base</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/flyzone</td>
              <td className="py-3 px-4">Add a public flyzone for users</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/rmflyzone</td>
              <td className="py-3 px-4">Remove a public flyzone for users</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/growthpotion</td>
              <td className="py-3 px-4">Obtain a growth potion</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/shrinkpotion</td>
              <td className="py-3 px-4">Obtain a shrink potion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Shield className="w-6 h-6" />
        Permissions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold">Permission</th>
              <th className="text-left py-3 px-4 font-semibold">Description</th>
              <th className="text-left py-3 px-4 font-semibold">Default</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.ban</td>
              <td className="py-3 px-4">Allow users to ban other</td>
              <td className="py-3 px-4">OP</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.unban</td>
              <td className="py-3 px-4">Allows users to unban others</td>
              <td className="py-3 px-4">OP</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.banlist</td>
              <td className="py-3 px-4">Allow users to see the ban list</td>
              <td className="py-3 px-4">OP</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.reload</td>
              <td className="py-3 px-4">Allow reloading of the plugin</td>
              <td className="py-3 px-4">OP</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.visitbase</td>
              <td className="py-3 px-4">Allow users to visit other bases</td>
              <td className="py-3 px-4">OP</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.setspawn</td>
              <td className="py-3 px-4">Allow users to set spawn</td>
              <td className="py-3 px-4">OP</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.kiss</td>
              <td className="py-3 px-4">Allow users to use kiss command</td>
              <td className="py-3 px-4">All</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.kitty</td>
              <td className="py-3 px-4">Allow users to use kitty command</td>
              <td className="py-3 px-4">All</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.playtime</td>
              <td className="py-3 px-4">Allow users to see their playtime</td>
              <td className="py-3 px-4">All</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.tpask</td>
              <td className="py-3 px-4">Allow users to ask to tp to other players</td>
              <td className="py-3 px-4">All</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.tpaccept</td>
              <td className="py-3 px-4">Allow users to accept tp requests</td>
              <td className="py-3 px-4">All</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.tpdeny</td>
              <td className="py-3 px-4">Allow users to deny tp requests</td>
              <td className="py-3 px-4">All</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.use</td>
              <td className="py-3 px-4">Allow users to use the help command</td>
              <td className="py-3 px-4">All</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.flyzone</td>
              <td className="py-3 px-4">Allow users to create flyzones</td>
              <td className="py-3 px-4">OP</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.growthpotion</td>
              <td className="py-3 px-4">Get a growth potion</td>
              <td className="py-3 px-4">OP</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.shrinkpotion</td>
              <td className="py-3 px-4">Get a shrink potion</td>
              <td className="py-3 px-4">OP</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">dough.recipes</td>
              <td className="py-3 px-4">Get the url for egg crafts</td>
              <td className="py-3 px-4">All</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
};

const jaileddoughSpigotContent: ContentItem = {
  title: "JailedDough",
  badge: "Minecraft",
  loader: "Spigot/Paper",
  badgeVariant: "minecraft",
  content: (
    <>
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
        JailedDough provides a comprehensive jail and punishment system for your Minecraft server.
      </p>

      <Card className="mb-6 border-minecraft/20 bg-minecraft/5">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-minecraft" />
            <CardTitle className="text-base">Installation</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Download the latest version</li>
            <li>Place the .jar file in your <code className="text-foreground bg-muted px-1 rounded">plugins</code> folder</li>
            <li>Restart your server</li>
            <li>Set up a jail location with <code className="text-foreground bg-muted px-1 rounded">/setjail</code></li>
          </ol>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Settings className="w-6 h-6" />
        Configuration
      </h2>

      <CodeBlock
        language="yaml"
        filename="plugins/JailedDough/config.yml"
        code={`jail:
  world: world
  x: 0.0
  y: 64.0
  z: 0.0
  yaw: 0.0
  pitch: 0.0

unjail:
  world: world
  x: 0.0
  y: 64.0
  z: 0.0
  yaw: 0.0
  pitch: 0.0`}
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Terminal className="w-6 h-6" />
        Commands
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold">Command</th>
              <th className="text-left py-3 px-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/jail</td>
              <td className="py-3 px-4">Jail a player for specified duration</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/unjail</td>
              <td className="py-3 px-4">Release a player from jail</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/setjail</td>
              <td className="py-3 px-4">Set the jail location</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/setunjail</td>
              <td className="py-3 px-4">Set the release location</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/jailreload</td>
              <td className="py-3 px-4">Reload the plugin</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Shield className="w-6 h-6" />
        Permissions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold">Permission</th>
              <th className="text-left py-3 px-4 font-semibold">Description</th>
              <th className="text-left py-3 px-4 font-semibold">Default</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">jaileddough.jail</td>
              <td className="py-3 px-4">Jail players</td>
              <td className="py-3 px-4">op</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">jaileddough.unjail</td>
              <td className="py-3 px-4">Unjail players</td>
              <td className="py-3 px-4">op</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">jaileddough.setjail</td>
              <td className="py-3 px-4">Set jail location</td>
              <td className="py-3 px-4">op</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">jaileddough.setunjail</td>
              <td className="py-3 px-4">View unjail location</td>
              <td className="py-3 px-4">op</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">jaileddough.reload</td>
              <td className="py-3 px-4">Reload the plugin</td>
              <td className="py-3 px-4">op</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
};

const wingsyncSpigotContent: ContentItem = {
  title: "WingSync",
  badge: "Minecraft",
  loader: "Spigot/Paper",
  badgeVariant: "minecraft",
  content: (
    <>
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
        WingSync bridges your Minecraft server with Discord, for whitelist functionality.
      </p>

      <Card className="mb-6 border-minecraft/20 bg-minecraft/5">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-minecraft" />
            <CardTitle className="text-base">Installation</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Download the latest version</li>
            <li>Place the .jar file in your <code className="text-foreground bg-muted px-1 rounded">plugins</code> folder</li>
            <li>Restart your server</li>
            <li>Configure with your Discord bot token</li>
          </ol>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Settings className="w-6 h-6" />
        Configuration
      </h2>

      <CodeBlock
        language="yaml"
        filename="plugins/WingSync/config.yml"
        code={`discord:
  token: "YOUR_DISCORD_BOT_TOKEN"
  guild_id: "YOUR_DISCORD_GUILD_ID"
  admin_id: "YOUR_DISCORD_ADMIN_ID"
  sync_bans: true

mysql:
  enabled: false
  host: localhost
  port: 3306
  database: minecraft
  username: root
  password: password123

plugin:
  messages:
    enabled: "WingSync has been enabled!"
    disabled: "WingSync has been disabled!"
    whitelist_added: "Player {player} has been added to the whitelist by {user}."
    whitelist_removed: "Player {player} has been removed from the whitelist by {user}."
    no_permission: "You do not have permission to perform this action."`}
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Terminal className="w-6 h-6" />
        Commands
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold">Command</th>
              <th className="text-left py-3 px-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/wsreload</td>
              <td className="py-3 px-4">Reload the plugin</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Shield className="w-6 h-6" />
        Permissions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold">Permission</th>
              <th className="text-left py-3 px-4 font-semibold">Description</th>
              <th className="text-left py-3 px-4 font-semibold">Default</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">wingsync.reload</td>
              <td className="py-3 px-4">Reload the plugin</td>
              <td className="py-3 px-4">op</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
};

const hytalePluralContent: ContentItem = {
  title: "Plural",
  badge: "Hytale",
  badgeVariant: "hytale",
  content: (
    <>
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
        Plural is a mod allowing systems to proxy their headmates within games.
      </p>

      <Card className="mb-6 border-hytale/20 bg-hytale/5">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-hytale" />
            <CardTitle className="text-base">Installation</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Download the latest version of Plural from above</li>
            <li>Place the .jar file in your <code className="text-foreground bg-muted px-1 rounded">mods</code> folder</li>
            <li>Start your server</li>
          </ol>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Terminal className="w-6 h-6" />
        Commands
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold">Command</th>
              <th className="text-left py-3 px-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/system create</td>
              <td className="py-3 px-4">Create your system</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/system rename</td>
              <td className="py-3 px-4">Rename your system</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/system remove</td>
              <td className="py-3 px-4">Remove your system</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/front add</td>
              <td className="py-3 px-4">Add a new front</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/front set</td>
              <td className="py-3 px-4">Set the current front</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/front delete</td>
              <td className="py-3 px-4">Delete a front</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-mono text-foreground">/front clear</td>
              <td className="py-3 px-4">Clear who is fronting</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Rocket className="w-6 h-6" />
        Roadmap
      </h2>

      <div className="space-y-4">
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Cloud Syncing
              </CardTitle>
              <Badge className="bg-primary/20 text-primary border-0">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Sync player data across multiple servers automatically. Configure once 
              and have settings follow players across any server running Plural with cloud sync enabled.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  ),
};

const hytaleWingsyncContent: ContentItem = {
  title: "WingSync",
  badge: "Hytale",
  badgeVariant: "hytale",
  planned: true,
  content: (
    <>
      <Card className="mb-6 border-hytale/20 bg-hytale/5">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-hytale" />
            <CardTitle className="text-base">Planned</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            WingSync for Hytale is planned for development. It will bring the same Discord-Hytale 
            bridging functionality that the Minecraft version offers.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Link2 className="w-6 h-6" />
        Planned Features
      </h2>

      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Account whitelisting between Discord and Hytale</li>
      </ul>
    </>
  ),
};

// Planned loader variants
const createPlannedLoaderVariant = (baseMod: ContentItem, loader: string): ContentItem => ({
  ...baseMod,
  loader,
  planned: true,
  content: (
    <>
      <Card className="mb-6 border-muted-foreground/20 bg-muted/30">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <CardTitle className="text-base">Planned</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The {loader} version of {baseMod.title} is planned for future development.
          </p>
          <p className="text-muted-foreground mt-2">
            In the meantime, refer to the <span className="text-foreground font-medium">Spigot/Paper</span> documentation 
            for feature information — the {loader} version will have the same functionality.
          </p>
        </CardContent>
      </Card>
    </>
  ),
});

const getContentKey = (game: string, loader: string, mod: string): string => {
  if (game === "hytale") {
    return `hytale-${mod}`;
  }
  return `${loader}-${mod}`;
};

const contentMap: Record<string, ContentItem> = {
  // Spigot/Paper (main versions)
  "paper-plural": pluralSpigotContent,
  "paper-doughminationcord": doughminationcordSpigotContent,
  "paper-jaileddough": jaileddoughSpigotContent,
  "paper-wingsync": wingsyncSpigotContent,
  // Fabric (planned)
  "fabric-plural": createPlannedLoaderVariant(pluralSpigotContent, "Fabric"),
  "fabric-doughminationcord": createPlannedLoaderVariant(doughminationcordSpigotContent, "Fabric"),
  "fabric-jaileddough": createPlannedLoaderVariant(jaileddoughSpigotContent, "Fabric"),
  "fabric-wingsync": createPlannedLoaderVariant(wingsyncSpigotContent, "Fabric"),
  // Forge (planned)
  "forge-plural": createPlannedLoaderVariant(pluralSpigotContent, "Forge"),
  "forge-doughminationcord": createPlannedLoaderVariant(doughminationcordSpigotContent, "Forge"),
  "forge-jaileddough": createPlannedLoaderVariant(jaileddoughSpigotContent, "Forge"),
  "forge-wingsync": createPlannedLoaderVariant(wingsyncSpigotContent, "Forge"),
  // Hytale
  "hytale-plural": hytalePluralContent,
  "hytale-wingsync": hytaleWingsyncContent,
};

export const DocContent = ({ game, loader, mod }: DocContentProps) => {
  const contentKey = getContentKey(game, loader, mod);
  const content = contentMap[contentKey] || pluralSpigotContent;

  return (
    <main className="flex-1 min-h-[calc(100vh-64px)] p-6 md:p-8 lg:p-12 max-w-4xl animate-fade-in">
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <div className="flex items-center gap-2">
          <Badge 
            variant="outline" 
            className={content.badgeVariant === "hytale" 
              ? "border-hytale text-hytale" 
              : "border-minecraft text-minecraft"
            }
          >
            {content.badge}
          </Badge>
          {content.loader && (
            <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
              {content.loader}
            </Badge>
          )}
          {content.planned && (
            <Badge className="bg-muted text-muted-foreground border-0">
              Planned
            </Badge>
          )}
        </div>
        {!content.planned && (
          <DownloadButton 
            game={game as "minecraft" | "hytale"} 
            mod={mod}
          />
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">{content.title}</h1>
      
      <div className="prose prose-invert max-w-none">
        {content.content}
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Last updated: February 2026</p>
      </div>
    </main>
  );
};
