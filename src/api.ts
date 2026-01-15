// api.ts
export const PokeAPI = {
  listPokemons: async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  }
};