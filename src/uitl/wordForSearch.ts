const randomMovieWords: string[] = [
    // Movie Genres
    "Action", "Adventure", "Mystery", "Horror", "Thriller", "Romance", "Drama",
    "Fantasy", "Comedy", "Animation", "Science Fiction", "Biography", "Documentary",
    "Western", "Superhero", "Crime", "Musical", "Historical", "Political",
    "Psychological", "Satire", "Epic", "Family", "Suspense", "Noir", "Cyberpunk",
    "Steampunk", "Parody", "Surreal", "Martial Arts", "Gangster", "Alien",
    "Post-Apocalyptic", "Underdog", "Time Travel", "Zombies", "Vampires",
    "Samurai", "Detective", "Espionage", "Heist", "War", "Revenge", "Pirates",
    "Demons", "Dragons", "Wizards", "Revolution", "Survival",

    // Movie Countries
    "USA", "France", "Germany", "Italy", "Japan", "India", "Brazil", "Mexico",
    "China", "Russia", "South Korea", "United Kingdom", "Canada", "Australia",
    "Spain", "Turkey", "Argentina", "Sweden", "Denmark", "Norway", "Iran", "Egypt",
    "South Africa", "Indonesia", "Thailand",

    // Random words for movie themes or fun search terms
    "Cosmic", "Nebula", "Vortex", "Zeppelin", "Gravity", "Odyssey", "Infinity",
    "Whispers", "Shadows", "Mirage", "Frost", "Twilight", "Specter", "Echoes",
    "Pulse", "Quantum", "Afterlife", "Eclipse", "Mosaic", "Pandora", "Oblivion",
    "Tempest", "Enigma", "Wanderlust", "Mythic", "Arcane", "Euphoria", "Maverick",
    "Vanguard", "Solstice", "Phantom", "Lunar", "Phoenix", "Seraph", "Stellar",
    "Zenith", "Horizon"
];
export const getRandomWord = (): string => {
    const randomIndex = Math.floor(Math.random() * randomMovieWords.length)
    return randomMovieWords[randomIndex]
}
