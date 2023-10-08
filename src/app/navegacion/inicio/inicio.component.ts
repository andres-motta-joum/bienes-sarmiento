import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { matTrendingUpOutline } from '@ng-icons/material-icons/outline';
import { matTrendingDownOutline } from '@ng-icons/material-icons/outline';
import { matHistoryOutline } from '@ng-icons/material-icons/outline';
import { heroHomeSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [provideIcons({matTrendingUpOutline, matTrendingDownOutline, matHistoryOutline, heroHomeSolid})]
})
export class InicioComponent implements OnInit{
  constructor(private router: Router){}
  inicio = false;

  ngOnInit(): void {  
    if(this.router.url == '/'){
      this.inicio = true;
    }
  }

  navegar(ruta: string){
    this.router.navigate([ruta]);
  }
}
