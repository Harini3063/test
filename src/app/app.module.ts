import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridAngular } from 'ag-grid-angular';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AgGridAngular

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
