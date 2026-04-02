import { Component, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { Character } from "../../interfaces/character.interface";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super.html',
  imports: [CharacterList, CharacterAdd]
})
export class DragonBallSuper {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
