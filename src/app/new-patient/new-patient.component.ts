import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';
import { concatAll } from 'rxjs/operator/concatAll';
import { RegisterpatientService } from'../services/registerpatient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  public patient : Patient;
  public str : string;
  public color: string;

  constructor(private rout:Router,private patientregister:RegisterpatientService) {
    this.patient = new Patient();
    this.patient.id=null;
    this.patient.name=null;
    this.patient.lastname=null;
    this.patient.gender=null;
    this.patient.blood=null;
    this.patient.address=null;
    this.patient.history=null;
    this.patient.email=null;

   }

  ngOnInit() {
  }

  genders = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  bloods = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'O', viewValue: 'O'},
    {value: 'AB', viewValue: 'AB'}
  ];


 /* doctors = [
    {value: 'Dr.Lion-0', viewValue: 'Dr.Lion'},
    {value: 'Dr.Elephant-1', viewValue: 'Dr.Elephant'},
    {value: 'Dr.Cat-2', viewValue: 'Dr.Cat'},
    {value: 'Dr.Penguin-3', viewValue: 'Dr.Penguin'}
  ];*/

  addpatient(){
    this.str=null;
    //console.log(this.patient);
    if(this.patient.id==null ||
      this.patient.name==null ||
      this.patient.lastname==null ||
      this.patient.gender==null || 
      this.patient.blood==null ||
      this.patient.address==null){
        this.str = "fill in the blank";
        this.color ="red";
    }else{
      this.patientregister.register(this.patient).subscribe(
        response =>{

          if (response==true) { 
            //console.log("add success");

            this.str="register patient success!"
            this.color="green";
            this.patient = new Patient();
            this.patient.id=null;
            this.patient.name=null;
            this.patient.lastname=null;
            this.patient.gender=null;
            this.patient.blood=null;
            this.patient.address=null;
            this.patient.history=null;
            this.patient.email=null;
          } else {
            //console.log("add fail");
            this.str="user ID card exist!";
            this.color="red";
          }
        });

    }


  }

  cancle(){
    this.rout.navigate(["/main/home"]);
  }
  back(){
    //console.log(ELEMENT_DATA);
    this.rout.navigate(["/main/home"]);
  }
}
