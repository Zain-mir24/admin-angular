import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './atoms/button/button.component';
import { InputTextComponent } from './atoms/input-text/input-text.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SecondPageComponent,
    LoginComponent,
    ButtonComponent,
    InputTextComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
