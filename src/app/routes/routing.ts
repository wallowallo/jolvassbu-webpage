import { RouterModule, Routes } from '@angular/router';

import { CabinsComponent } from '../cabins/cabins.component';
import { ContactComponent } from '../contact/contact.component';
import { FacilitiesComponent } from '../facilities/facilities.component';
import { HomeComponent } from '../home/home.component';
import { CaravanCampingComponent } from '../caravan-camping/caravan-camping.component';
import { SummerActivitiesComponent } from '../summer-activities/summer-activities.component';
import { WinterActivitiesComponent } from '../winter-activities/winter-activities.component';
import { MapComponent } from '../map/map.component';
import { JolsterComponent } from '../jolster/jolster.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact',  component:  ContactComponent},
  { path: 'cabins', component: CabinsComponent },
  { path: 'jolster',  component:  JolsterComponent},
  { path: 'map', component: MapComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'caravan', component: CaravanCampingComponent },
  { path: 'summer-activities', component: SummerActivitiesComponent },
  { path: 'winter-activities', component: WinterActivitiesComponent },
  { path: '**', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(appRoutes);
