import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
	
  server = "http://127.0.0.1:8000/";
  
  constructor(private http: HttpClient) {
    
  }

  addinfoSave(info: any): Observable<any> {
   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  	return this.http.post(this.server+"api/info/pos", info);
  }
  editinfoSave(info: any): Observable<any> {
   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  	return this.http.post(this.server+"api/info/update/"+info.id, info);
  }
  getSingleEditRecordDataService(id: any): Observable<any> {

   	return this.http.get(this.server+"api/info/edit/"+id);
  }
  getAllInfo(){

  	return this.http.get(this.server+"api/info");	
  }
  deleteInfoService(id: any){
	
	return this.http.get(this.server+"api/info/delete/"+id);
  }
}
