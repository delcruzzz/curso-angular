import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter';
import { HeroComponent } from './pages/hero/hero';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonBallSuper } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
  // agregar nueva ruta
  {
    path: "",
    component: CounterComponent
  },
  // implementación de ruta para /hero
  {
    path: "hero",
    component: HeroComponent
  },
  {
    path: "dragonball",
    component: Dragonball
  },
  {
    path: "dragonball-super",
    component: DragonBallSuper
  }
];
