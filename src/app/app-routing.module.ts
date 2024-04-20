import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';

const routes: Routes = [
  {path:'',component:SideNavBarComponent},
  {path:'home-page',component:SideNavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
