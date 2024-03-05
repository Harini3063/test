
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidebarService } from './sidebar.service';
import {TooltipModule} from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { AgGridAngular } from 'ag-grid-angular';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopBarComponent,
    

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    TableModule,
    TooltipModule,
    AgGridAngular,



  ],
  providers:[SidebarService],

  bootstrap: [AppComponent]
})
export class AppModule { }
