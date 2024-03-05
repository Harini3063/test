import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent
 {

  SidebarShow=true;
  showInputBar: boolean=false;


  toggleSearch()
  {
    this.showInputBar=!this.showInputBar;
  }


  constructor(private sidebarService:SidebarService){}



  toggleSidebar():void
  {
    this.SidebarShow=!this.SidebarShow;
    this.sidebarService.toggleSideBarShow(this.SidebarShow);
  }

}
