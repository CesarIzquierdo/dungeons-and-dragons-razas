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
import { TodasRazasComponent } from './todas-razas/todas-razas.component';
import { ClasesComponent } from './clases/clases.component';
import { MapasComponent } from './mapas/mapas.component';
import { HumanosComponent } from './deatllesR/humanos/humanos.component';
import { ElfosComponent } from './deatllesR/elfos/elfos.component';
import { EnanosComponent } from './deatllesR/enanos/enanos.component';
import { MedianosComponent } from './deatllesR/medianos/medianos.component';
import { DraconidosComponent } from './deatllesR/draconidos/draconidos.component';
import { GnomosComponent } from './deatllesR/gnomos/gnomos.component';
import { SemiorcosComponent } from './deatllesR/semiorcos/semiorcos.component';
import { SemielfosComponent } from './deatllesR/semielfos/semielfos.component';
import { TieflingsComponent } from './deatllesR/tieflings/tieflings.component';
import { AarakocraComponent } from './deatllesR/aarakocra/aarakocra.component';
import { GoliathsComponent } from './deatllesR/goliaths/goliaths.component';
import { GenasiComponent } from './deatllesR/genasi/genasi.component';
import { TritonesComponent } from './deatllesR/tritones/tritones.component';
import { YuanTiComponent } from './deatllesR/yuan-ti/yuan-ti.component';
import { TabaxiComponent } from './deatllesR/tabaxi/tabaxi.component';
import { LizardfolkComponent } from './deatllesR/lizardfolk/lizardfolk.component';
import { FirbolgsComponent } from './deatllesR/firbolgs/firbolgs.component';
import { KenkusComponent } from './deatllesR/kenkus/kenkus.component';
import { TortlesComponent } from './deatllesR/tortles/tortles.component';
import { ShiftersComponent } from './deatllesR/shifters/shifters.component';
import { WarforgedComponent } from './deatllesR/warforged/warforged.component';
import { ChangelingsComponent } from './deatllesR/changelings/changelings.component';
import { KalashtarComponent } from './deatllesR/kalashtar/kalashtar.component';
import { AasimarComponent } from './deatllesR/aasimar/aasimar.component';
import { MinotaurosComponent } from './deatllesR/minotauros/minotauros.component';
import { CentaurosComponent } from './deatllesR/centauros/centauros.component';


const appRoutes:Routes =[
  {path:'', component:HomeComponent},
  {path:'razas', component: RazasComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'todas-razas', component:TodasRazasComponent},
  {path:'mapas', component:MapasComponent},
  {path:'clases', component:ClasesComponent},
  {path:'Humanos', component:HumanosComponent},
  {path:'Elfos', component:ElfosComponent},
  {path:'Enanos', component:EnanosComponent},
  {path:'Draconidos', component:DraconidosComponent},
  {path:'Medianos', component:MedianosComponent},
  {path:'Gnomos', component:GnomosComponent},

  {path:'Semiorcos', component:SemiorcosComponent},
  {path:'Semielfos', component:SemielfosComponent},
  {path:'Tieflings', component:TieflingsComponent},
  {path:'Aarakocra', component:AarakocraComponent},
  {path:'Goliaths', component:GoliathsComponent},
  {path:'Genasi', component:GenasiComponent},
  {path:'Tritones', component:TritonesComponent},
  {path:'Yuan-ti', component:YuanTiComponent},
  {path:'Tabaxi', component:TabaxiComponent},
  {path:'Lizardfolk', component:LizardfolkComponent},
  {path:'Firbolgs', component:FirbolgsComponent},
  {path:'Kenkus', component:KenkusComponent},
  {path:'Tortles', component:TortlesComponent},
  {path:'Shifters', component:ShiftersComponent},
  {path:'Warforged', component:WarforgedComponent},
  {path:'Changelings', component:ChangelingsComponent},
  {path:'Kalashtar', component:KalashtarComponent},
  {path:'Aasimar', component:AasimarComponent},
  {path:'Minotauros', component:MinotaurosComponent},
  {path:'Centauros', component:CentaurosComponent},

  {path:'**',component:ErrorPersonalizadoComponent},
 ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    RazasComponent,
    ContactoComponent,
    ErrorPersonalizadoComponent,
    TodasRazasComponent,
    ClasesComponent,
    MapasComponent,
    HumanosComponent,
    ElfosComponent,
    EnanosComponent,
    MedianosComponent,
    DraconidosComponent,
    GnomosComponent,
    SemiorcosComponent,
    SemielfosComponent,
    TieflingsComponent,
    AarakocraComponent,
    GoliathsComponent,
    GenasiComponent,
    TritonesComponent,
    YuanTiComponent,
    TabaxiComponent,
    LizardfolkComponent,
    FirbolgsComponent,
    KenkusComponent,
    TortlesComponent,
    ShiftersComponent,
    WarforgedComponent,
    ChangelingsComponent,
    KalashtarComponent,
    AasimarComponent,
    MinotaurosComponent,
    CentaurosComponent
  ],
  imports: [
    BrowserModule,  FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule,NgImageSliderModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
