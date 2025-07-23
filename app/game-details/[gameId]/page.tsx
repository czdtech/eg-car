import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GameDetailsClient from './game-details-client';
import { featuredGames, type Game } from '@/lib/game-data';

// Helper function to get game by ID
function getGameBySlug(gameId: string): Game | undefined {
  return featuredGames.find(game =>
    game.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === gameId
  );
}

// Generate metadata for each game
export async function generateMetadata({ params }: { params: { gameId: string } }): Promise<Metadata> {
  const gameId = params.gameId;
  const game = getGameBySlug(gameId);

  if (!game) {
    return {
      title: 'Game Not Found - Eggy Car Unblocked',
      description: 'The requested game could not be found. Browse our collection of free unblocked games.',
    };
  }

  // Generate game-specific SEO data
  const gameTitle = `${game.title} Unblocked - Play Free Online ${game.category} Game`;
  const gameDescription = `Play ${game.title} unblocked online for free! ${game.description} No download required - play instantly in your browser.`;
  const gameKeywords = `${game.title} unblocked, ${game.title.toLowerCase()}, ${game.category.toLowerCase()} games, ${game.title.toLowerCase().replace(/\s+/g, ' ')}, play ${game.title.toLowerCase()}`;

  return {
    title: gameTitle,
    description: gameDescription,
    keywords: gameKeywords,
    authors: [{ name: 'Eggy Car Unblocked Portal' }],
    robots: 'index, follow',
    openGraph: {
      title: gameTitle,
      description: gameDescription,
      type: 'website',
      images: [
        {
          url: game.image,
          width: 800,
          height: 600,
          alt: `${game.title} - Free Online ${game.category} Game`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: gameTitle,
      description: gameDescription,
      images: [game.image],
    },
  };
}

// Generate structured data for each game
function generateGameStructuredData(game: Game, gameId: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://eggycar.com';
  
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": `${game.title} Unblocked`,
    "description": game.description,
    "genre": game.category,
    "gamePlatform": ["Web Browser", "HTML5"],
    "operatingSystem": ["Web Browser"],
    "applicationSubCategory": "Browser Game",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eggy Car Unblocked Portal"
    },
    "url": `${baseUrl}/game-details/${gameId}`,
    "image": game.image,
    "screenshot": game.image,
    "playMode": "SinglePlayer",
    "accessMode": "visual",
    "accessibilityFeature": ["keyboard"],
    "interactionType": "realTime"
  };
}

// Game-specific content data
const gameContent = {
  'rooftop-snipers-2': {
    introduction: `"Rooftop Snipers 2" is a hilarious two-player fighting game developed by Joonas "Regalis" Rikkonen. Players must knock their opponents off the rooftop using sniper rifles, with physics-driven action that makes the game incredibly fun. Release Date: 2021 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Player 1: WASD to move, Spacebar to shoot
- Player 2: Arrow keys to move, Enter to shoot

### Tips & Tricks
1. Use recoil to jump to higher positions.
2. Predict your opponent's movement trajectory when shooting.
3. Bullets can bounce off map edges - use this to your advantage.`,
    faq: `### Q: What platforms does the game support?
A: Supports browsers, PC, and mobile devices (via web access).

### Q: How do I start local multiplayer?
A: Connect two keyboards or controllers and select "Local Versus" mode.

### Q: Does the game have single-player mode?
A: Yes, you can challenge AI opponents in single-player mode.`,
    embedPath: '/embed/rooftopsnipers2/index.html'
  },
  'zombocalypse': {
    introduction: `"Zombocalypse" is an intense action-packed zombie survival game where you fight against hordes of undead creatures. Armed with various weapons, you must survive wave after wave of zombie attacks in this thrilling apocalypse scenario. Release Date: 2020 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Arrow keys or WASD to move
- Mouse to aim and shoot
- Spacebar to reload
- Number keys to switch weapons

### Tips & Tricks
1. Keep moving to avoid being surrounded by zombies.
2. Aim for headshots to deal maximum damage.
3. Manage your ammunition carefully.
4. Use the environment to your advantage.`,
    faq: `### Q: How many weapons are available?
A: The game features multiple weapons including pistols, shotguns, and assault rifles.

### Q: Is there a survival mode?
A: Yes, survive as long as possible against endless zombie waves.

### Q: Can I play with friends?
A: Currently, this is a single-player experience focused on survival.`,
    embedPath: '/embed/zombocalypse/index.html'
  },
  'run-3': {
    introduction: `"Run 3" is an endless running game set in space where you navigate through a series of tunnels. With its unique gravity mechanics and challenging obstacles, this game will test your reflexes and spatial awareness as you run, jump, and even run on walls! Release Date: 2014 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Arrow keys or WASD to move
- Spacebar to jump
- Use walls and ceiling to change gravity direction

### Tips & Tricks
1. Use the walls to change your running direction.
2. Plan your jumps carefully to avoid falling into space.
3. Collect power-ups to help you progress.
4. Master the gravity mechanics for advanced levels.`,
    faq: `### Q: How many levels are there?
A: Run 3 features hundreds of challenging levels with increasing difficulty.

### Q: Are there different characters?
A: Yes, you can unlock different characters with unique abilities.

### Q: What happens if I fall off the track?
A: You'll restart from the beginning of the current level.`,
    embedPath: '/embed/run3/index.html'
  },
  'basket-random': {
    introduction: `"Basket Random" is a fun and chaotic basketball game featuring unpredictable physics and random elements. Each match brings new surprises with changing courts, balls, and player abilities. Perfect for quick matches with friends or solo play! Release Date: 2021 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Player 1: W key to jump/shoot
- Player 2: Up arrow key to jump/shoot
- Move automatically based on physics

### Tips & Tricks
1. Time your jumps perfectly for better shots.
2. Adapt to changing court conditions.
3. Use the random elements to your advantage.
4. Practice timing for different ball types.`,
    faq: `### Q: How many players can play?
A: Basket Random supports 1-2 players in local multiplayer.

### Q: Do the courts change during gameplay?
A: Yes, courts and conditions change randomly during matches.

### Q: What makes each game different?
A: Random physics, different balls, and changing environments keep each game unique.`,
    embedPath: '/embed/basketrandom/index.html'
  },
  'jetpack-joyride': {
    introduction: `"Jetpack Joyride" is an endless runner game where you play as Barry Steakfries, who breaks into a secret laboratory and steals an experimental jetpack. Fly through the lab, avoid obstacles, collect coins, and see how far you can go! Release Date: 2011 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Click or hold spacebar to fly up
- Release to fall down
- Collect coins and power-ups
- Avoid lasers, missiles, and other obstacles

### Tips & Tricks
1. Master the jetpack's momentum and timing.
2. Collect coins to unlock new jetpacks and outfits.
3. Use vehicles when they appear for protection.
4. Watch for warning signs before obstacles appear.`,
    faq: `### Q: How do I get a high score?
A: Survive longer, collect more coins, and complete missions.

### Q: Are there different jetpacks?
A: Yes, you can unlock various jetpacks with different designs.

### Q: What are the vehicles for?
A: Vehicles provide temporary protection and unique abilities.`,
    embedPath: '/embed/jetpackjoyride/index.html'
  },
  'monkey-mart': {
    introduction: `"Monkey Mart" is a delightful simulation game where you manage a supermarket run by monkeys. Plant fruits, stock shelves, and serve customers in this charming business management game. Build your monkey empire one banana at a time! Release Date: 2022 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Arrow keys or WASD to move
- Spacebar to interact/pick up items
- Mouse to navigate menus
- Manage inventory and serve customers

### Tips & Tricks
1. Keep shelves stocked to satisfy customers.
2. Upgrade your equipment for better efficiency.
3. Plant and harvest fruits to maintain supply.
4. Expand your store as you earn more money.`,
    faq: `### Q: How do I expand my store?
A: Earn money by serving customers and use it to buy new sections.

### Q: Can I automate tasks?
A: Yes, you can hire monkey assistants to help with various tasks.

### Q: What products can I sell?
A: Fruits, vegetables, and other grocery items that you can grow or purchase.`,
    embedPath: '/embed/monkeymart/index.html'
  },
  'n-gon': {
    introduction: `"N-Gon" is a unique physics-based puzzle platformer where you control a shape-shifting polygon. Navigate through challenging levels using matter.js physics engine, solving puzzles and overcoming obstacles with your geometric abilities. Release Date: 2020 | Platform: Web, PC`,
    guide: `### Controls
- Arrow keys or WASD to move
- Mouse to interact with objects
- Spacebar to jump
- Use physics to solve puzzles

### Tips & Tricks
1. Experiment with different shapes and movements.
2. Use momentum to reach higher platforms.
3. Study the physics interactions carefully.
4. Look for creative solutions to complex puzzles.`,
    faq: `### Q: What makes this game unique?
A: The game uses advanced 2D physics and shape-shifting mechanics.

### Q: How many levels are there?
A: The game features dozens of challenging physics-based levels.

### Q: Is it suitable for all ages?
A: Yes, it's a family-friendly puzzle game that challenges spatial thinking.`,
    embedPath: '/embed/ngon/index.html'
  },
  'pizza-tower': {
    introduction: `"Pizza Tower" is a fast-paced 2D platformer inspired by the Wario Land series. Play as Peppino Spaghetti, a pizza chef on a mission to save his restaurant from destruction. With unique cartoon-style graphics and frenetic gameplay, this game offers an unforgettable experience! Release Date: 2023 | Platform: Web, PC`,
    guide: `### Controls
- Arrow keys or WASD to move
- Spacebar to jump
- Z or X for actions
- Run and build momentum for special moves

### Tips & Tricks
1. Build up speed to break through walls and enemies.
2. Use Peppino's transformation abilities strategically.
3. Explore levels thoroughly to find secrets.
4. Master the combo system for higher scores.`,
    faq: `### Q: What's the goal of the game?
A: Save Peppino's pizza restaurant from the evil Pizza Tower.

### Q: Are there boss battles?
A: Yes, face off against unique bosses with different attack patterns.

### Q: Can I replay levels?
A: Yes, replay levels to improve your score and find hidden secrets.`,
    embedPath: '/embed/pizzatower/index.html'
  },
  'stickman-hook': {
    introduction: `"Stickman Hook" is an addictive skill game where you swing through hundreds of challenging levels. Control a stickman as he swings from hook to hook, performing acrobatic stunts and reaching the finish line. Master the physics-based movement for the ultimate swinging experience! Release Date: 2019 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Click and hold to grab hooks
- Release to let go and swing
- Time your grabs and releases perfectly
- Use momentum to reach distant hooks

### Tips & Tricks
1. Build momentum by swinging in larger arcs.
2. Time your releases at the peak of your swing.
3. Look ahead to plan your next hook grab.
4. Use walls and obstacles to change direction.`,
    faq: `### Q: How many levels are there?
A: Stickman Hook features hundreds of increasingly challenging levels.

### Q: Can I customize my character?
A: Yes, unlock different stickman skins as you progress.

### Q: What happens if I miss a hook?
A: You'll fall and restart from the beginning of the level.`,
    embedPath: '/embed/stickman-hook/index.html'
  },
  'stickman-golf': {
    introduction: `"Super Stickman Golf" is an award-winning physics puzzle game that combines golf with creative level design. Navigate through impossible courses with portals, sticky walls, and other unique mechanics. This isn't your ordinary golf game! Release Date: 2011 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Mouse to aim and set power
- Click to shoot
- Use physics and course elements strategically
- Plan your shots carefully

### Tips & Tricks
1. Study each hole's unique mechanics before shooting.
2. Use sticky walls and portals to your advantage.
3. Consider ball physics and bouncing angles.
4. Experiment with different power levels.`,
    faq: `### Q: What makes this golf game special?
A: Unique physics puzzles with portals, sticky surfaces, and creative obstacles.

### Q: How many courses are available?
A: Multiple themed courses with dozens of challenging holes.

### Q: Is there a multiplayer mode?
A: The game focuses on single-player puzzle-solving experiences.`,
    embedPath: '/embed/stickmangolf/index.html'
  },
  'tiny-fishing': {
    introduction: `"Tiny Fishing" is a relaxing fishing game where you cast your line into the depths of the ocean. Catch different types of fish, upgrade your equipment, and see how deep you can go. Perfect for a calming gaming session! Release Date: 2021 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Click and drag to cast your line
- Move mouse to control the hook
- Catch fish by timing your movements
- Upgrade your gear with earned coins

### Tips & Tricks
1. Time your casts to catch multiple fish.
2. Upgrade your line length to reach deeper waters.
3. Different fish are worth different amounts.
4. Be patient and strategic with your movements.`,
    faq: `### Q: How do I catch bigger fish?
A: Upgrade your equipment and fish in deeper waters.

### Q: What can I do with the coins I earn?
A: Purchase upgrades for your fishing line, hook, and other equipment.

### Q: Are there rare fish to discover?
A: Yes, explore deeper waters to find rare and valuable fish species.`,
    embedPath: '/embed/tinyfishing/index.html'
  },
  'weavesilk': {
    introduction: `"Weavesilk" is a unique generative art game that lets you create beautiful, flowing artwork with simple mouse movements. Watch as your gestures transform into stunning silk-like patterns and colors. It's both a game and an art creation tool! Release Date: 2020 | Platform: Web, PC`,
    guide: `### Controls
- Move mouse to create flowing patterns
- Click and drag for different effects
- Experiment with different movements
- Save your artistic creations

### Tips & Tricks
1. Try different mouse movement speeds and patterns.
2. Experiment with circular and linear motions.
3. Layer multiple patterns for complex designs.
4. Use the full canvas space for larger artworks.`,
    faq: `### Q: Can I save my artwork?
A: Yes, you can save your creations as image files.

### Q: Is there a specific goal?
A: The goal is creative expression - there's no right or wrong way to play.

### Q: What makes the patterns appear?
A: Advanced algorithms translate your mouse movements into flowing silk-like visuals.`,
    embedPath: '/embed/weavesilk/index.html'
  }
};

export default function GameDetailsPage({ params }: { params: { gameId: string } }) {
  const gameId = params.gameId;
  const currentGame = getGameBySlug(gameId);

  // If game not found, return 404
  if (!currentGame) {
    notFound();
  }

  // Get game content or use default
  const content = gameContent[gameId as keyof typeof gameContent] || {
    introduction: `Welcome to ${currentGame.title}! Experience exciting gameplay with stunning graphics and engaging mechanics.`,
    guide: `### How to Play
- Use standard controls to navigate
- Follow on-screen instructions
- Have fun and enjoy the game!`,
    faq: `### Q: How do I start playing?
A: Simply click the play button and follow the instructions.

### Q: Is this game free?
A: Yes, all our games are completely free to play.`,
    embedPath: currentGame.gameUrl.startsWith('/embed/') ? currentGame.gameUrl : '/embed/default/index.html'
  };

  // Generate structured data for SEO
  const structuredData = generateGameStructuredData(currentGame, gameId);

  return (
    <>
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <GameDetailsClient game={currentGame} content={content} />
    </>
  );
}