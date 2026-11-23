import { Routes } from '@angular/router';
import { MHomeComponent } from './m-home/m-home.component';
import { MNavbarComponent } from './m-navbar/m-navbar.component';
import { MFooterComponent } from './m-footer/m-footer.component';
import { MAboutComponent } from './m-about/m-about.component';
import { MContactComponent } from './m-contact/m-contact.component';
import { MArticleComponent } from './m-article/m-article.component';
import { MNewsfeedComponent } from './m-newsfeed/m-newsfeed.component';
import { MLoginComponent } from './m-login/m-login.component';
import { MRegisterChoiceComponent } from './m-register-choice/m-register-choice.component';
import { MRegisterCounselorComponent } from './m-register-counselor/m-register-counselor.component';
import { MRegisterPatientComponent } from './m-register-patient/m-register-patient.component';
import { MResetEmailComponent } from './m-reset-email/m-reset-email.component';
import { MResetPasswordComponent } from './m-reset-password/m-reset-password.component';
import { MVerifyCodeComponent } from './m-verify-code/m-verify-code.component';
import { DDashboardComponent } from './d-dashboard/d-dashboard.component';
import { DSidebarComponent } from './d-sidebar/d-sidebar.component';
import { DProfileComponent } from './d-profile/d-profile.component';
import { DRequestsComponent } from './d-requests/d-requests.component';
import { DArticlesComponent } from './d-articles/d-articles.component';
import { DScheduleComponent } from './d-schedule/d-schedule.component';
import { PDashboardComponent } from './p-dashboard/p-dashboard.component';
import { PProfileComponent } from './p-profile/p-profile.component';
import { PDoctorComponent } from './p-doctor/p-doctor.component';
import { PApDetailsComponent } from './p-ap-details/p-ap-details.component';
import { PSidebarComponent } from './p-sidebar/p-sidebar.component';
import { PRequestComponent } from './p-request/p-request.component';

export const routes: Routes = [
    {path: '',component:MHomeComponent},
    {path: 'm-home',component:MHomeComponent},
    {path: 'm-navbar',component:MNavbarComponent},
    {path: 'm-footer',component:MFooterComponent},
    {path: 'm-about',component:MAboutComponent},
    {path: 'm-contact',component:MContactComponent},
    {path: 'm-article',component:MArticleComponent},
    {path: 'm-newsfeed',component:MNewsfeedComponent},
    {path: 'm-login',component:MLoginComponent},
    {path: 'm-register-choice',component:MRegisterChoiceComponent},
    {path: 'm-register-counselor',component:MRegisterCounselorComponent},
    {path: 'm-register-patient',component:MRegisterPatientComponent},
    {path: 'm-reset-email',component:MResetEmailComponent},
    {path: 'm-reset-password',component:MResetPasswordComponent},
    {path: 'm-verify-code',component:MVerifyCodeComponent},
    
    {
      path: 'd-sidebar',
      component: DSidebarComponent,
      children: [
        { path: '', redirectTo: 'd-dashboard', pathMatch: 'full' },
        { path: 'd-dashboard', component: DDashboardComponent },
        { path: 'd-profile', component: DProfileComponent },
        { path: 'd-requests', component: DRequestsComponent },
        { path: 'd-articles', component: DArticlesComponent },
        { path: 'd-schedule', component: DScheduleComponent },
        { path: 'sign-out', redirectTo: '/d-dashboard' }
      ]
    },

    {
      path: 'p-sidebar',
      component: PSidebarComponent,
      children: [
        { path: '', redirectTo: 'p-dashboard', pathMatch: 'full' },
        { path: 'p-dashboard', component: PDashboardComponent },
        { path: 'p-profile', component: PProfileComponent },
        { path: 'p-request', component: PRequestComponent },
        { path: 'p-doctor/:id', component: PDoctorComponent },
        { path: 'p-ap-details', component: PApDetailsComponent },
        { path: 'sign-out', redirectTo: '/p-dashboard' }
      ]
    }
];