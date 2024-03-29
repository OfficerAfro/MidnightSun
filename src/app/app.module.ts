import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AlphaComponent } from './alpha/alpha.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NoteComponent } from './note/note.component';
import { DownloadComponent } from './download/download.component';
import { CarComponent } from './car/car.component';
import { MaterialModule } from './material/material.module';
import { BlankpageComponent } from './blankpage/blankpage.component';
import { MoneyComponent } from './money/money.component';
import { AddrressComponent } from './addrress/addrress.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MomoLayoutComponent } from './momo-layout/momo-layout.component';
import { SelectorPageComponent } from './selector-page/selector-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidemenuComponent,
    AlphaComponent,
    NoteComponent,
    DownloadComponent,
    CarComponent,
    BlankpageComponent,
    MoneyComponent,
    AddrressComponent,
    MomoLayoutComponent,
    SelectorPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MaterialModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
