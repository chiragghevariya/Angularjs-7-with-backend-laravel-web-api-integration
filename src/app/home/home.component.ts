import { Component, OnInit } from '@angular/core';
import { InformationService } from '../services/information.service';
import { Information } from '../information';
import { ActivateRoute,Params,Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  private infoservice:InformationService,
  private router:Router,
  ) { }

  getAllList: any;
  ngOnInit() {

  	this.getAllInfoData();
  }


  getAllInfoData(){

  	this.infoservice.getAllInfo().subscribe(infodata =>{
  		console.log(infodata.data);
  		this.getAllList =infodata.data;
  	})
  }
  deleteInfo(id: any){

  	let t = confirm("are you sure want to delete this record");
  	if(t == true){

  		this.infoservice.deleteInfoService(id).subscribe(infodata =>{
	  		this.getAllInfoData();
	  	})
  	}
  }
}
