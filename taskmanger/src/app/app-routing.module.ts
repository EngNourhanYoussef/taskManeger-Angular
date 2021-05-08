import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ViewTaskComponent } from './views/view-task/view-task.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignUpComponent},
  {path:'',component:SignInComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGaurdService]},
  {path:'tasks',component:ViewTaskComponent,canActivate:[AuthGaurdService]},
  {path:'addtasks',component:AddTaskComponent,canActivate:[AuthGaurdService]},
  {path:'edittasks/:id',component:EditTaskComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
