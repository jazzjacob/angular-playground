import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { ButtonThingyComponent } from './button-thingy/button-thingy.component';
import { TypeExperimentComponent } from './type-experiment/type-experiment.component';
import { AssignmentFourComponent } from './assignment-four/assignment-four.component';
import { GameControlComponent } from './assignment-four/game-control/game-control.component';
import { OddComponent } from './assignment-four/odd/odd.component';
import { EvenComponent } from './assignment-four/even/even.component';
import { SectionViiComponent } from './section-vii/section-vii.component';
import { CoolHighlightDirective } from './section-vii/cool-highlight/cool-highlight.directive';
import { BetterHighlightDirective } from './section-vii/better-highlight/better-highlight.directive';
import { UnlessDirective } from './section-vii/unless.directive';
import { DirectivePlayingComponent } from './directive-playing/directive-playing.component';
import { ColorChangeDirective } from './directive-playing/color-change.directive';
import { IXServicesComponent } from './ix-services/ix-services.component';
import { AccountComponent } from './ix-services/account/account.component';
import { NewAccountComponent } from './ix-services/new-account/new-account.component';
import { AssignmentFiveComponent } from './assignment-five/assignment-five.component';
import { ActiveUsersComponent } from './assignment-five/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment-five/inactive-users/inactive-users.component';

import { AccountsService } from './ix-services/accounts.service';
import { LoggingService } from './ix-services/logging.service';
import { UsersService } from './assignment-five/users.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    InfoBoxComponent,
    ButtonThingyComponent,
    TypeExperimentComponent,
    AssignmentFourComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    SectionViiComponent,
    CoolHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DirectivePlayingComponent,
    ColorChangeDirective,
    IXServicesComponent,
    AccountComponent,
    NewAccountComponent,
    AssignmentFiveComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [
    AccountsService,
    LoggingService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
