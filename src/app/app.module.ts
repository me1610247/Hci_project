import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { ListingComponent } from './components/listing/listing.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { MessageComponent } from './components/message/message.component';
import { ChartModule } from 'angular-highcharts';
import { NewMessageComponent } from './components/new-message/new-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BrowseComponent,
    ListingComponent,
    FeedbackComponent,
    NotificationComponent,
    ProfileComponent,
    AnalyticsComponent,
    MessageComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
