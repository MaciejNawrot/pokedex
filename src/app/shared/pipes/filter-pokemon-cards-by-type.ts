import { Pipe, PipeTransform } from '@angular/core';
import { PokemonCard } from '../../core/interfaces';

@Pipe({ name: 'filterPokemonCardsByType'})
export class FilterPokemonCardsByType implements PipeTransform {
  transform(cards: PokemonCard[], type: string): PokemonCard[] {
    return type ? cards.filter( ({types}) => types && types.includes(type)) : cards;
  }
}
