import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainContainerModule } from './main-container/main-container.module';


import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuComponent } from './topbar/menu/menu.component';
import { MainContainerComponent } from './main-container/main-container.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MenuComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,MainContainerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
