import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { NewMessageComponent } from './components/new-message/new-message.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'browse',component:BrowseComponent},
  {path:'list',component:ListingComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'notification',component:NotificationComponent},
  {path:'profile',component:ProfileComponent},
  {path:'analytics',component:AnalyticsComponent},
  {path:'message',component:MessageComponent},
  {path:'new',component:NewMessageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
