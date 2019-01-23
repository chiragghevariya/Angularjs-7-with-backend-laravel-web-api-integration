import { Component, OnInit } from '@angular/core';
import { Information } from '../Information';
import { InformationService } from '../services/information.service';
import { FlashMessageService } from '../services/flash-message.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
  private infoservicess: InformationService,
  private flash: FlashMessageService) {
  
  }

  model = new Information();

  addinfo(){
  	this.infoservicess.addinfoSave(this.model).subscribe(response=>{
      console.log(response);
      this.flash.showFlashMessage("Successfully created.");
  	});
  }

  ngOnInit() {
  }

 
}
