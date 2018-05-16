import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Patient } from '../models/patient';
import { Connect} from '../models/connect';

@Injectable()
export class RegisterpatientService {
  public data:any;
  constructor(private http: Http) { }

  register(user:Patient): Observable<boolean>{

    let url =Connect.getHostUrl()+'/registerPatient.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, user, header).map((res: Response) => { return this.checkregis(res)}).catch((error: any) => { 
      console.log(error);
      return  Observable.of(false) ;
     }); ;

 }
 checkregis(res: Response):boolean{

  let data = res.json();
  //console.log(data);
  if (data.Error == "true") {
    //console.log(data.Message);
    return false;
  } else {
    //console.log(data.Message);
    return true;
  }

 }

 getpatient(): Observable<boolean>{
  let url =Connect.getHostUrl()+'/getpatient.php'
  let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
  return this.http.post(url,null, header).map((res: Response) => { return this.checkgetpatient(res)}).catch((error: any) => { 
    console.log(error);
    return  Observable.of(false) ;
   });

}
checkgetpatient(res: Response):boolean{
  let data = res.json();
  //console.log(data);
  if (data.Error == "true") {
    return false;
  } else {
    
    this.data = data.data;
    //console.log(this.data);

    } 
    return true;
  }

  deletedata(data:any){
    let url = Connect.getHostUrl()+'/deletepatient.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,data,header).toPromise();
  }

  saveedit(data:any){
    let url = Connect.getHostUrl()+'/saveeditpatient.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,data,header).toPromise();
  }

  savehistory(data:any){
    let url = Connect.getHostUrl()+'/savehistorypatient.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,data,header).toPromise();
  }

  search(data:string){
    let url = Connect.getHostUrl()+'/searchpatient.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,data,header).toPromise();
  }



}
