import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RazasComponent } from './razas/razas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { NgImageSliderModule } from 'ng-image-slider';


const appRoutes:Routes =[
  {path:'', component:HomeComponent},
  {path:'razas', component: RazasComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**',component:ErrorPersonalizadoComponent},
 ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    RazasComponent,
    ContactoComponent,
    ErrorPersonalizadoComponent
  ],
  imports: [
    BrowserModule,  FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule,NgImageSliderModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
