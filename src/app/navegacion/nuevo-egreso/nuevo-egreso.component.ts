import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { ionChevronDown } from '@ng-icons/ionicons';
import { matArrowDownward } from '@ng-icons/material-icons/baseline';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { WhatsappApiService } from 'src/app/servicios/whatsapp-api/whatsapp-api.service';
import { Operacion } from 'src/app/interfaces/operacion';
import { Firestore, Timestamp, addDoc, collection, doc, setDoc } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-nuevo-egreso',
  templateUrl: './nuevo-egreso.component.html',
  styleUrls: ['./nuevo-egreso.component.scss'],
  providers: [provideIcons({ionChevronDown, matArrowDownward})]
})
export class NuevoEgresoComponent {
  private subcription!: Subscription;
  form: FormGroup;
  codigo = false;
  responsables: string[];

  constructor(private wsppApi: WhatsappApiService, private fb: FormBuilder, private firestore: Firestore, private currencyPipe: CurrencyPipe) {
    this.responsables = wsppApi.responsables;
    this.form = this.fb.group({
      valor: [ '', [Validators.required]],
      responsable: [ '', [Validators.required]],
      fecha: [ , [Validators.required]],
      concepto: [ '', [Validators.required]]
    });
    this.subcription = this.form.valueChanges.subscribe(() => {
      this.transformarPrecio();
    });
  }

  transformarPrecio(){
    if (this.form.value.valor) {
      const formattedPrice = this.form.value.valor.replace(/\D/g, '').replace(/^0+/, '');
      this.form.patchValue({
        valor: this.currencyPipe.transform(formattedPrice, '', '', '1.0-0')
      }, { emitEvent: false });
    }
  }


  invalid(field: string) {
    return this.form.controls[field].invalid && this.form.controls[field].touched;
  }


  submit(): any {
    Object.values(this.form.controls).forEach(control => {
      if (typeof control.value === 'string') {
        control.setValue(control.value.trim());
      }
      control.markAsTouched();
    });
    if (this.form.valid) {
      this.codigo = true;
    }
    //this.wsppApi.sendMessage()
  }

  async agregar(){
    this.form.value['fecha'] = new Date(this.form.value['fecha']);
    this.form.value['valor'] = Number(this.form.value.valor.replace(/\./g, '').replace(/,/g, ''));
    await addDoc(collection(this.firestore, "egresos"), this.form.value as Operacion);
    this.form.reset();
  }
}
