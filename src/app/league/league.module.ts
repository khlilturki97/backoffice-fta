import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import {GlobalModule} from '../_globals/global.module';
import { ListLeagueComponent } from './list-league/list-league.component';
import { ShowLeagueComponent } from './show-league/show-league.component';


@NgModule({
  declarations: [ListLeagueComponent, ShowLeagueComponent],
  imports: [
    GlobalModule,
    LeagueRoutingModule
  ]
})
export class LeagueModule { }
