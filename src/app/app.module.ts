import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagesComponent } from './components/images/images.component';
import { CatsComponent } from './components/cats/cats.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { CatCreationDialogComponent } from './components/cats/cat/cat-creation-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCatComponent } from './components/create-cat/create-cat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImagesComponent,
    CatsComponent,
    CatCreationDialogComponent,
    CreateCatComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
