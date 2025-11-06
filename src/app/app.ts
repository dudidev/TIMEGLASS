import { Component, OnDestroy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnDestroy {
  protected readonly title = signal('cronometro');

  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;

  private cronometroSub!: Subscription;

  private cronometro$: Observable<number> = new Observable((subscriber: Subscriber<number>) => {
    let contador = 0;

    const intervalId = setInterval(() => {
      contador++;
      subscriber.next(contador); //Se emite el valor del contador
    }, 1000);

    //Se cancela la supcripción y se limpia el intervalo
    return () => {
      clearInterval(intervalId);
    }
  });

  //Iniciamos el cronometro
  start() {
    if (!this.cronometroSub || this.cronometroSub.closed) {
      this.cronometroSub = this.cronometro$.subscribe(() => {
        this.incrementarTiempo();
      });
    }
  }

  //Pausamos el cronometro 
  pause() {
    this.cronometroSub.unsubscribe();
  }

  //Reiniciamos el cronometro seteando los valores a 0
  reset() {
    this.pause();
    this.horas = this.minutos = this.segundos = 0;
  }

  incrementarTiempo() {
    this.segundos++;
    if (this.segundos >= 60) {
      this.segundos = 0;
      this.minutos++;
      if (this.minutos >= 60) {
        this.minutos = 0;
        this.horas++;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.cronometroSub) this.cronometroSub.unsubscribe();
  }
}
