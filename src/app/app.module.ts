import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CabinsComponent } from './cabins/cabins.component';
import { CaravanCampingComponent } from './caravan-camping/caravan-camping.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SummerActivitiesComponent } from './summer-activities/summer-activities.component';
import { WinterActivitiesComponent } from './winter-activities/winter-activities.component';

import { routing } from './routes/routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CabinsComponent,
    CaravanCampingComponent,
    FacilitiesComponent,
    SummerActivitiesComponent,
    WinterActivitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
