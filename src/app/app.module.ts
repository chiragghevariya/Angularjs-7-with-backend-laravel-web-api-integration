import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { InformationService } from './services/information.service';
import { FlashMessageService } from './services/flash-message.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
     FormsModule,
     HttpClientModule,
    AppRoutingModule
  ],
  providers: [InformationService,FlashMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
