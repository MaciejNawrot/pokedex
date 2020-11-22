import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { TypeColors } from '../../constants/type-colors';

@Directive({
  selector: '[appSetColorsForPokemonType]'
})
export class SetColorsForPokemonTypeDirective implements OnInit {
  private typeColors = TypeColors;

  @Input('appSetColorsForPokemonType') pokemonType: string;
  @HostBinding('style.backgroundColor') backgroundColorStyle: string;
  @HostBinding('style.color') textColorStyle: string;

  ngOnInit(): void {
    const foundTypeColorObject = this.typeColors.find(typeColor => typeColor.type === this.pokemonType);

    if (foundTypeColorObject) {
      const { backgroundColor, color } = foundTypeColorObject;
      this.backgroundColorStyle = backgroundColor;
      this.textColorStyle = color;
    }
  }
}
