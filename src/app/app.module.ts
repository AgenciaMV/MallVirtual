import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// RUTAS
import { APP_ROUTING} from './app.routes';

// SERVICIOS


// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BienesRaicesComponent } from './components/bienes-raices/bienes-raices.component';
import { CarrosComponent } from './components/carros/carros.component';
import { ComidasBebidasComponent } from './components/comidas-bebidas/comidas-bebidas.component';
import { DeportesComponent } from './components/deportes/deportes.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EmpleoComponent } from './components/empleo/empleo.component';
import { HospedajeComponent } from './components/hospedaje/hospedaje.component';
import { LoginComponent } from './components/login/login.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { OtrosServiciosComponent } from './components/otros-servicios/otros-servicios.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProfesionesComponent } from './components/profesiones/profesiones.component';
import { RecreacionesComponent } from './components/recreaciones/recreaciones.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReparacionesComponent } from './components/reparaciones/reparaciones.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { SaludComponent } from './components/salud/salud.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { TransportesComponent } from './components/transportes/transportes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BienesRaicesComponent,
    CarrosComponent,
    ComidasBebidasComponent,
    DeportesComponent,
    EducacionComponent,
    EmpleoComponent,
    HospedajeComponent,
    LoginComponent,
    MensajeComponent,
    NosotrosComponent,
    NotificacionComponent,
    OtrosServiciosComponent,
    PaginaComponent,
    PerfilComponent,
    ProfesionesComponent,
    RecreacionesComponent,
    RegistroComponent,
    ReparacionesComponent,
    RespuestaComponent,
    SaludComponent,
    TiendasComponent,
    TransportesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
