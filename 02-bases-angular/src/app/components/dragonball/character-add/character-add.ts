import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  characters = input.required<Character[]>()

  /*
    señales para el formulario

    nombre y poder
  */
  inputName = signal("")
  inputPower = signal(0)
  newCharacter = output<Character>();

  addCharacter() {
    if (!this.inputName() || !this.inputPower() || this.inputPower() <= 0) return;

    let lastId = this.characters().length
    const character: Character = {
      id: lastId + 1,
      name: this.inputName(),
      power: this.inputPower()
    }

    this.newCharacter.emit(character)
    this.resetForm()
  }

  resetForm() {
    this.inputName.set("")
    this.inputPower.set(0)
  }
}
