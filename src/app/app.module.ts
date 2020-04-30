import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/Header/header.component';
import { NavbarComponent } from './component/navBar/navbar.component';
import { RectanguloComponent } from './component/rectangulo/rectangulo.component';
import { ZonatarjetasComponent } from './component/TarjetasComponent/zonaT.component';
import { TarjetaRosaComponent } from './component/TarjetaRosa/tarjetarosa.component';
import { TarjetagrisComponent } from './component/TarjetaGris/tarjetagris.component';
import { TarjetaBlancaComponent } from './component/TarjetaBlanca/tarjetablanca.component';
import { TarjetaVerdeComponent } from './component/TarjetaVerde/tarjetaverde.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    RectanguloComponent,
    ZonatarjetasComponent,
    TarjetaRosaComponent,
    TarjetagrisComponent,
    TarjetaBlancaComponent,
    TarjetaVerdeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
