import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {
  /* cuando usamos input es porque recibimos información desde afuera */
  characters = input.required<Character[]>()
  nameList = input<string>()
}
