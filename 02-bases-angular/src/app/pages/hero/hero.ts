import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: "./hero.html",

  // los pipes los utilizamos para transformar valores de forma visual
  imports: [UpperCasePipe]
})
export class HeroComponent{
  name = signal("Ironman")
  age = signal(45)

  capitalizedNameComputed = computed(() => this.name().toUpperCase())

  // métodos
  getHeroDescription() {
    return `${this.name()} - ${this.age()}`
  }

  changeHero() {
    this.name.set("Spiderman")
    this.age.set(22)
  }

  resetForm() {
    this.name.set("Ironman")
    this.age.set(45)
  }

  changeAge() {
    this.age.set(60)
  }
}
