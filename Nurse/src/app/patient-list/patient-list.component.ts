import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterpatientService } from '../services/registerpatient.service';

import { Inject } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  public displayedColumns :any;
  public dataSource : any;
  public search:string;
  public data:any;
  public stredit:boolean;
  public strhistory:boolean;

  public edituser:any;
  public historyuser:any;

  constructor(private rout:Router,private getpatient:RegisterpatientService) {
    this.stredit =false;
    this.strhistory=false;
   }

  ngOnInit() {
    this.getpa();

  }


  edit(user:any){
    this.edituser=user;
    this.stredit=true;
    //console.log(this.edituser);
  }
  editcancle(){
    this.stredit=false;
  }
  editsubmit(){
    this.getpatient.saveedit(this.edituser).then(
      (response) => {
        let data = response.json();
        this.getpa();
       // console.log(data);
        this.stredit =false;
      });

  }

  history(user:any){
    this.strhistory=true;
    this.historyuser=user;
    //console.log(this.historyuser);
  }
  historycancle(){
      this.strhistory=false;
  }
  historysubmit(){
    this.getpatient.savehistory(this.historyuser).then(
      (response) => {
        let data = response.json();
        this.getpa();
       // console.log(data);
        this.strhistory =false;
      });
  }










  delete(user:any){
    //console.log(user);
    this.getpatient.deletedata(user).then(
      (response) => {
        let data = response.json();
        this.getpa();
        //console.log(data);
      });
  }

  
  searchfunction(){
      //console.log(this.search);
    if(this.search==""||this.search==null){
      this.getpa();
    }else{
      this.getpatient.search(this.search).then(
        (response) => {
          let data = response.json();
          //this.getpa();
          //console.log(data);
          this.data=data.data;
          this.settable();
        });
    }

  }
  back(){
    //console.log(ELEMENT_DATA);
    this.rout.navigate(["/main/home"]);
  }

  getpa(){
    this.getpatient.getpatient().subscribe(
      response =>{
        if (response==true) {
          this.data=this.getpatient.data;
          this.settable();
          //console.log(ELEMENT_DATA);
    
    }else{

    }
   });
  }

  settable(){
    this.displayedColumns = ['ID', 'name','lastname', 'history','edit', 'delete'];
    //console.log(this.data);
    this.dataSource = new MatTableDataSource(this.data);
    //console.log(this.data);
  }


}

/*export interface Element {
  name: string;
  position: number;
  
  
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Ms.Bee'},
  { position: 2, name: 'Ms.Bow'},
  { position: 3, name: 'Mr.Ton'},
  { position: 4, name: 'Mr.Toy'},
  { position: 5, name: 'Ms.Boron' },
  { position: 6, name: 'Mr.Carbon'},
  { position: 7, name: 'Ms.Nitrogen'},
  { position: 8, name: 'Ms.Oxygen' },
  { position: 9, name: 'Mr.Fluorine'},
  { position: 10, name: 'Ms.Neon' },
  { position: 11, name: 'Ms.Sodium'},
  { position: 12, name: 'Mr.Magnesium' },
  { position: 13, name: 'Mr.Aluminum' },
  { position: 14, name: 'Mr.Silicon'},
  { position: 15, name: 'Mr.Phosphorus' },
  { position: 16, name: 'Mr.Sulfur'},
  { position: 17, name: 'Ms.Chlorine'},
  { position: 18, name: 'Ms.Argon' },
  { position: 19, name: 'Mr.Potassium'},
  { position: 20, name: 'Ms.Calcium'},
];
*/