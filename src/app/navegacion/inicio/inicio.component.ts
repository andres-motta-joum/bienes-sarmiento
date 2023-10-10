import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { ionChevronDown } from '@ng-icons/ionicons';
import { matTrendingUpOutline } from '@ng-icons/material-icons/outline';
import { matTrendingDownOutline } from '@ng-icons/material-icons/outline';
import { matHistoryOutline } from '@ng-icons/material-icons/outline';
import { matArrowDownward } from '@ng-icons/material-icons/baseline';
import { matArrowUpward } from '@ng-icons/material-icons/baseline';
import { heroHomeSolid } from '@ng-icons/heroicons/solid';
import { Subscription } from 'rxjs';

interface desplegables{
  fanny: boolean;
  adriana: boolean;
  claudia: boolean;
  ivan: boolean;
  jose: boolean;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [provideIcons({ionChevronDown, matTrendingUpOutline, matTrendingDownOutline, matHistoryOutline, heroHomeSolid, matArrowDownward, matArrowUpward})]
})
export class InicioComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute){}
  inicio = false;
  routeSubscription!: Subscription;

  ngOnInit(): void {  
    if(this.router.url == '/'){
      this.inicio = true;
    }
    this.routeSubscription = this.router.events.subscribe(async event => {
      if(this.router.url == '/'){
        this.inicio = true;
      }else{
        this.inicio = false;
      }
    });
  }

  navegar(ruta: string){
    this.router.navigate([ruta]);
  }
}
