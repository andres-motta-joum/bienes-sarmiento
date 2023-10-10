import { provideIcons } from '@ng-icons/core';
import { matCheck } from '@ng-icons/material-icons/baseline';
import { heroXMarkMini } from '@ng-icons/heroicons/mini';
import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.scss'],
  providers: [provideIcons({matCheck, heroXMarkMini})]
})
export class CodigoComponent {
  constructor(private firestore: Firestore){}
  @ViewChildren('verificationInput') verificationInputs!: QueryList<ElementRef>;
  @ViewChild('firstInput') firstInput!: ElementRef;
  private codigo = '1234'
  private algo: boolean = false;
  enteredCodes: string[] = ['', '', '', '', '', ''];
  codigoIncorrecto = false;

  @Output() cerrar = new EventEmitter<void>();
  @Output() agregar = new EventEmitter<void>();
  cargando = false;
  actualizacionExitosa = false;

  cerrarContenido(){
    this.cerrar.emit();
  }

  async submit(){
    this.cargando = true;
    this.codigoIncorrecto = false;
    const enteredCode = this.enteredCodes.join('');
    if(enteredCode == this.codigo){
      this.cargando = true;
      this.actualizacionExitosa = true;
      this.agregar.emit();
      setTimeout(()=>{
        this.cerrarContenido();
      }, 1700)
    }else{
      this.cargando = false;
      this.codigoIncorrecto = true;
    }
  }


  onInput(event: Event,keyboardEvent: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    const enteredCode = input.value;
    this.enteredCodes[index] = enteredCode;
    const inputValue = input.value;

    if (/^\d$/.test(inputValue)) {
      if (inputValue.length === 1 && !this.algo) {
        const nextIndex = index + 1;
        const nextInput = this.verificationInputs.toArray()[nextIndex];
        if (nextInput) {
          nextInput.nativeElement.focus();
        }
      }
    } else {
      input.value = ''; 
    }

    if (inputValue.length > 1 ) {
      input.value = inputValue.charAt(0);
    }
    if (keyboardEvent.repeat) {
      keyboardEvent.preventDefault();
    }
  }
  
  onInputBefore(event: Event,keyboardEvent: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    if (inputValue.length !== 0) {
      if (keyboardEvent.key === 'Backspace') {
        this.algo = false;
      }else{
        this.algo = true;
        keyboardEvent.preventDefault();
      }
    }
    if (inputValue.length === 0 && keyboardEvent.key === 'Backspace') {
      this.algo = false;
      const previousIndex = index - 1;
      if (previousIndex >= 0) {
        const previousInput = this.verificationInputs.toArray()[previousIndex];
        if (previousInput) {
          previousInput.nativeElement.focus();
          previousInput.nativeElement.value = '';
        }
      }
    }
    if (inputValue.length === 0 && keyboardEvent.key === 'e') {
      keyboardEvent.preventDefault();
    }
    if (inputValue.length === 0 && (keyboardEvent.key !== 'e' && keyboardEvent.key !== 'Backspace')) {
      this.algo = false;
    }

  }
}
