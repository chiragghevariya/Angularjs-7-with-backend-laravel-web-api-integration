import { Injectable } from '@angular/core';

  declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class FlashMessageService {
	
  constructor() { }

  showFlashMessage(message: any){

  	$("#successMessage").html(message).show().delay(1000).fadeIn().delay(1000).fadeOut();
  }
}
