import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';


@Component({
  selector: 'app-sidebar',

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarShow:boolean=true;
  addPannelShow:boolean=false;

  constructor(private sidebarService:SidebarService)
  {
    this.sidebarService.sidebarDisplay$.subscribe(show=> {this.sidebarShow=show});
  }



}
