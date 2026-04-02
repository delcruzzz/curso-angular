import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

// Extiende funcionalidad de la clase y la vuelve un componente
@Component({
  /*template: `
    <h1>Hola mundo</h1>
    <p>Contador: {{ counter }}</p>

    <!-- los eventos en angular van entre paréntesis () -->
    <button (click)="this.increaseByOne(this.counter)">Sumar +1</button>
    <button>Restar -1</button>
    <h2>CounterComponent</h2>
  `,*/
  // importamos el template html
  templateUrl: "./counter.html",

  // trabajar en zoneless
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  counter: number = 10

  increaseByOne(): number {
    this.counter += 1
    return this.counter;
  }

  decreaseByOne(): number {
    this.counter -= 1
    return this.counter;
  }

  resetCounter(): number {
    this.counter = 10
    return this.counter;
  }

  // pruebas con los signals
  /*
    las signals son una forma de manejar estado reactivo, son como una variable
    "inteligente" que Angular observa: cuando cambia, Angular sabe qué parte depende
    de ese valor y puede actualizar solo eso

    Sirven para:
      - guardar estado local de un componente
      - derivar valores a partir de otros valores
      - reaccionar automáticamente a cambios
      - reducir trabajo manual con detección de cambios

    las signals se pueden rescribir pero las computed no
  */
  counterSignal = signal(10);

  // setear la señal
  resetCounterSignal() {
    // esto me sirve para setear un valor a la señal
    this.counterSignal.set(0);
  }

  increaseByOneSignal() {
    // actualizamos el signal cuando nuestro nuevo valor depende del anterior
    this.counterSignal.update((current) => current += 1)
  }

  decreaseByOneSignal() {
    // actualizamos el signal cuando nuestro nuevo valor depende del anterior
    this.counterSignal.update((current) => current -= 1)
  }
}
