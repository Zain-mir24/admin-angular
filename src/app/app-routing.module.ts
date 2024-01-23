import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  { path: '', component: LoginComponent }, // Existing route for the home component
  { path: 'signup', component: SignUpComponent },
  { path: 'Dashboard', component: DashboardComponent }, // New route for your component
  { path: 'Orders', component: OrdersComponent }, // New route for your component
  { path: 'Users', component: UserComponent }, // New route for your component
  { path: 'Products', component: ProductComponent }, // New route for your component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
