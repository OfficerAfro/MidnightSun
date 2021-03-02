import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: '', component : AlphaComponent},
  {path: 'download', component : DownloadComponent},
  {path: 'note', component : NoteComponent},
  {path: 'car', component : CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }