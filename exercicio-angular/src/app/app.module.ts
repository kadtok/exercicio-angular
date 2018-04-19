import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MenuComponent } from './topbar/menu/menu.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { MainContainerComponent } from './main-container/main-container.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    GaleriaComponent,
    MenuComponent,
    CarrosselComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
