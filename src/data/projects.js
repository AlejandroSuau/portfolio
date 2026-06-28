export const projects = [
  {
    id: "custom-game-engine",
    title: "C++ OpenGL Game Engine",
    tier: "featured",
    year: 2025,
    tech: [
      "C++",
      "OpenGL",
      "3D Rendering",
      "Game Engine Architecture",
      "JSON",
      "glTF"
    ],
    short: "Custom-built 2D/3D game engine in C++ and OpenGL, featuring real-time rendering, component-based architecture, scene management, UI, physics, audio, and glTF animation.",
    ctaLabel: "Code (GitHub)",
    ctaUrl: "https://github.com/AlejandroSuau/game_engine_3d",
    cover: "https://raw.githubusercontent.com/AlejandroSuau/game_engine_3d/refs/heads/main/demo/demo1.png",
    images: [
      "https://raw.githubusercontent.com/AlejandroSuau/game_engine_3d/refs/heads/main/demo/demo1.png",
      "https://raw.githubusercontent.com/AlejandroSuau/game_engine_3d/refs/heads/main/demo/demo2.png",
      "https://raw.githubusercontent.com/AlejandroSuau/game_engine_3d/refs/heads/main/demo/demo3.png"
    ]
  },
  {
    id: "pathfinder",
    title: "Pathfinder",
    tier: "featured",
    year: 2025,
    tech: ["Custom Engine 2D", "C++", "SDL2", "A*", "Dijkstra", "BFS"],
    short: "C++ pathfinding on my 2D engine: A*, Dijkstra, BFS, swappable heuristics (Manhattan/Euclidean/Octile), and visual debugging.",
    ctaLabel: "Code (GitHub)",
    ctaUrl: "https://github.com/AlejandroSuau/Engine2D",
    cover: "https://raw.githubusercontent.com/AlejandroSuau/Engine2D/main/demos/pathfinding-showcase/result-images/demo-1.png",
    images: [
      "https://raw.githubusercontent.com/AlejandroSuau/Engine2D/main/demos/pathfinding-showcase/result-images/demo-1.png",
      "https://raw.githubusercontent.com/AlejandroSuau/Engine2D/main/demos/pathfinding-showcase/result-images/demo-2.png",
      "https://raw.githubusercontent.com/AlejandroSuau/Engine2D/main/demos/pathfinding-showcase/result-images/demo-3.png"
    ]
  },
  {
    id: "chess",
    title: "Chess",
    tier: "featured",
    year: 2025,
    tech: ["C++", "SDL2"],
    short: "C++ chess with legal move validation, clean board logic, and a lightweight UI focused on clarity.",
    ctaLabel: "Code (GitHub)",
    ctaUrl: "https://github.com/AlejandroSuau/cplus_cplus_chess",
    cover: "https://raw.githubusercontent.com/AlejandroSuau/cplus_cplus_chess/main/demo/starting.png",
    images: [
      "https://raw.githubusercontent.com/AlejandroSuau/cplus_cplus_chess/main/demo/starting.png",
      "https://raw.githubusercontent.com/AlejandroSuau/cplus_cplus_chess/main/demo/check.png",
      "https://raw.githubusercontent.com/AlejandroSuau/cplus_cplus_chess/main/demo/checkmate.png"
    ]
  },
  {
    id: "candy-crush-candy-converter",
    title: "Candy Crush — Candy Converter",
    tier: "featured",
    year: "2023–2024",
    tech: ["C++", "Live ops", "Game economy"],
    short: "Built the Candy Converter (Candy Sweets Exchange Machine) at King: a live-ops feature letting players exchange surplus candies for rewards, shipped to a top mobile game played by millions.",
    ctaLabel: "About Candy Crush Saga",
    ctaUrl: "https://www.king.com/game/candycrush/",
    cover: `${import.meta.env.BASE_URL}projects/candy-crush-candy-converter/cover.png`,
    images: [`${import.meta.env.BASE_URL}projects/candy-crush-candy-converter/cover.png`]
  },
  {
    id: "candy-crush-win-streak",
    title: "Candy Crush — Win Streak",
    tier: "featured",
    year: "2023–2024",
    tech: ["C++", "Live ops", "Player retention"],
    short: "Built the Win Streak system (the \"Tiered On Fire\" mechanic) at King: rewards consecutive level wins to keep players engaged, shipped to a top mobile game played by millions.",
    ctaLabel: "About Candy Crush Saga",
    ctaUrl: "https://www.king.com/game/candycrush/",
    cover: `${import.meta.env.BASE_URL}projects/candy-crush-win-streak/cover.png`,
    images: [`${import.meta.env.BASE_URL}projects/candy-crush-win-streak/cover.png`]
  },
  {
    id: "pacman",
    title: "Pacman",
    tier: "secondary",
    year: 2024,
    tech: ["C++", "SDL2"],
    short: "C++ Pac-Man with grid collisions, pellet collection, multi-level progression, and tight arcade pacing.",
    ctaLabel: "Code (GitHub)",
    ctaUrl: "https://github.com/AlejandroSuau/cplus_cplus_pacman",
    cover: "https://raw.githubusercontent.com/AlejandroSuau/cplus_cplus_pacman/main/demo/game.png",
    images: [
      "https://raw.githubusercontent.com/AlejandroSuau/cplus_cplus_pacman/main/demo/game.png",
      "https://raw.githubusercontent.com/AlejandroSuau/cplus_cplus_pacman/main/demo/main-menu.png"
    ]
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    tier: "secondary",
    year: 2024,
    tech: ["C++", "SDL2"],
    short: "C++ Flappy Bird with smooth scrolling, procedural obstacles, and persistent high-score tracking.",
    ctaLabel: "Code (GitHub)",
    ctaUrl: "https://github.com/AlejandroSuau/cplusplus_flappy_bird",
    cover: "https://raw.githubusercontent.com/AlejandroSuau/cplusplus_flappy_bird/main/demo/demo1.png",
    images: [
      "https://raw.githubusercontent.com/AlejandroSuau/cplusplus_flappy_bird/main/demo/demo1.png",
      "https://raw.githubusercontent.com/AlejandroSuau/cplusplus_flappy_bird/main/demo/demo2.png"
    ]
  }
];

export const featuredProjects = projects.filter(p => p.tier === "featured");
export const secondaryProjects = projects.filter(p => p.tier === "secondary");
