//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

//components
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { ProfileComponent } from './components/profile/profile.component';


//services
import { UserService } from './services/user.service';


//directives
import { HighlightDirective } from './directives/highlight.directive';

//pipes
import { AwsomePipe } from './pipes/awsome.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
    AwsomePipe,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
        { provide: 'IUserService', useClass: UserService },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }


