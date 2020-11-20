export interface PokemonListResponse {
  cards: PokemonCard[];
}

export interface PokemonDetailResponse {
  card: PokemonCard;
}

export interface PokemonCard {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string;
}
