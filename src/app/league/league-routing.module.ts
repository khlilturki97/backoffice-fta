import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListLeagueComponent} from './list-league/list-league.component';
import {ShowLeagueComponent} from './show-league/show-league.component';


const routes: Routes = [
  {
    path: '',
    component: ListLeagueComponent
  },
  {
    path: ':id',
    component: ShowLeagueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule {
}
