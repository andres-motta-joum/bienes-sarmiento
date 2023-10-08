import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { heroHomeSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.scss'],
  providers: [provideIcons({heroHomeSolid})]
})
export class BarraMenuComponent {
  constructor(private router: Router){}
  navegar(ruta: string){
    this.router.navigate([ruta]);
  }
}
