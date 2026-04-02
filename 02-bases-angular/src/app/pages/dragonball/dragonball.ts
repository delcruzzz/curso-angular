import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {
  characters = signal<Character[]>([{
    id: 1,
    name: "Goku",
    power: 9001,
  }, {
    id: 2,
    name: "Vegetta",
    power: 6002,
  }])

  /*
    señales para el formulario

    nombre y poder
  */
  inputName = signal("")
  inputPower = signal(0)

  addCharacter() {
    let lastId = this.characters().length
    this.characters().push({
      id: lastId + 1,
      name: this.inputName(),
      power: this.inputPower()
    })
  }
}
