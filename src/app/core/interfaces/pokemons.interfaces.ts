export interface PokemonListResponse {
  cards: PokemonCard[];
}

export interface PokemonDetailResponse {
  card: PokemonCard;
}

export interface PokemonTypesResponse {
  types: string[];
}

export interface PokemonCard {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  set: string;
  rarity: string;
}
