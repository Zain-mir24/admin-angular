import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from 'src/common/api.interceptor';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './atoms/button/button.component';
import { InputTextComponent } from './atoms/input-text/input-text.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomTableModule } from './components/table/table.module';
import { AdminCardsComponent } from './components/admin-cards/admin-cards.component';
import { HeaderSearchComponent } from './atoms/header-search/header-search.component';
import { DropdownComponent } from './atoms/dropdown/dropdown.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupVerifyComponent } from './signup-verify/signup-verify.component';
import { ApiInterceptorProviderService } from './api-interceptor-provider.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SecondPageComponent,
    LoginComponent,
    ButtonComponent,
    InputTextComponent,
    DashboardComponent,
    AdminCardsComponent,
    HeaderSearchComponent,
    DropdownComponent,
    UserComponent,
    ProductComponent,
    SignUpComponent,
    SignupVerifyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgApexchartsModule,
    AppRoutingModule,
    CustomTableModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [
    ...ApiInterceptorProviderService.prototype.provideApiInterceptor(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
