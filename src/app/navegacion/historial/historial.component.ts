import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroChevronRight } from '@ng-icons/heroicons/outline';
import { heroChevronLeft } from '@ng-icons/heroicons/outline';
import { heroArrowUpMini } from '@ng-icons/heroicons/mini';
import { heroArrowDownMini } from '@ng-icons/heroicons/mini';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
  providers: [provideIcons({heroChevronRight, heroChevronLeft, heroArrowUpMini, heroArrowDownMini})]
})
export class HistorialComponent {
  ingresos: boolean = true;
  egresos: boolean = false;
}
