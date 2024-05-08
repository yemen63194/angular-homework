import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { ApartementsComponent } from './apartements/apartements.component';

const routes: Routes = [
  {path:'',redirectTo:"residence",pathMatch:'full'},
  {path:'residence',component:ResidencesComponentComponent},
  {path:'apartements/:idR',component:ApartementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
