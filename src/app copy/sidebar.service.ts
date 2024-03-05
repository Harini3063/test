import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarShow = new Subject<boolean>();
  sidebarDisplay$ = this.sidebarShow.asObservable()

  constructor() { }

  toggleSideBarShow(input:boolean){
    this.sidebarShow.next(input);
  }
}
