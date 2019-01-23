import { Component, OnInit } from '@angular/core';
import { ActivateRoute,Params,Router } from '@angular/router';
import { Information } from '../Information';
import { InformationService } from '../services/information.service';
import { FlashMessageService } from '../services/flash-message.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
  private infoservicess: InformationService,
  private flash: FlashMessageService,
  private activeRoute: ActivatedRoute) {
  
  }

  model = new Information();

  editInfoUpdate(){
  	this.infoservicess.editinfoSave(this.model).subscribe(response=>{
      console.log(response);
      this.flash.showFlashMessage("Successfully updated.");
  	});
  }

  
  ngOnInit() {

  	 const queryParams = this.activeRoute.snapshot.queryParams
     const routeParams = this.activeRoute.snapshot.params;
	 this.getSingleEditRecordData(routeParams.id)

  }

  getSingleEditRecordData(id :any){
  	
  	this.infoservicess.getSingleEditRecordDataService(id).subscribe(response=>{
      console.log(response);
      this.model = response.data;
      this.model.id = response.data.id;
  	});

  }
}
