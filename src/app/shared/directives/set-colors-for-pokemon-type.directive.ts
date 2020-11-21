import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetColorsForPokemonType]'
})
export class SetColorsForPokemonTypeDirective implements OnInit {
  private typeColors = [
    {type: 'Colorless', backgroundColor: '#cacaca', color: '#000000'},
    {type: 'Darkness', backgroundColor: '#4f4f4f', color: '#ffffff'},
    {type: 'Dragon', backgroundColor: '#ff9823', color: '#000000'},
    {type: 'Fairy', backgroundColor: '#9e3855', color: '#ffffff'},
    {type: 'Fighting', backgroundColor: '#644c2f', color: '#ffffff'},
    {type: 'Fire', backgroundColor: '#ff6020', color: '#000000'},
    {type: 'Grass', backgroundColor: '#5dff25', color: '#000000'},
    {type: 'Lightning', backgroundColor: '#fff53a', color: '#000000'},
    {type: 'Metal', backgroundColor: '#a2b1ac', color: '#000000'},
    {type: 'Psychic', backgroundColor: '#7954a8', color: '#ffffff'},
    {type: 'Water', backgroundColor: '#53adff', color: '#000000'},
  ];

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
