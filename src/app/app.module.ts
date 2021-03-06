import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './contents/alerts/alerts.component';
import { BadgeComponent } from './contents/badge/badge.component';
import { BreadcrumbComponent } from './contents/breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './contents/buttons/buttons.component';
import { ButtonGroupComponent } from './contents/button-group/button-group.component';
import { CardComponent } from './contents/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertsComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonsComponent,
    ButtonGroupComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
