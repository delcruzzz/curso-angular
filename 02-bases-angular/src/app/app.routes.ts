import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter';
import { HeroComponent } from './pages/hero/hero';

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
  }
];
