import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {



  rowData:any[]=[
    {name:"Raj",employeeID:"4567",location:"Chennai",Designation:"Software Engineer",contact:"9384857642"},
    {name:"Kamala",employeeID:"4589",location:"Delhi",Designation:"Senior Software Engineer",contact:"9785697852"},
    {name:"Lalitha",employeeID:"4867",location:"Banglore",Designation:"Business Analyst",contact:"6532481958"}
  ];

  columnData: ColDef[]=[
    {field: 'name'},
    {field: 'employeeID'},
    {field: 'location'},
    {field: 'Designation'},
    {field: 'contact'},
  ];

}
