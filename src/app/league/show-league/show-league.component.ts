import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-league',
  templateUrl: './show-league.component.html',
  styleUrls: ['./show-league.component.scss']
})
export class ShowLeagueComponent implements OnInit {

  league;
  leagueId;

  constructor(private crud: CrudService,
              private route: ActivatedRoute) {
    route.params
      .subscribe(params => {
        this.leagueId = params.id;
      });
  }

  ngOnInit() {
    this.getOneLeague();
  }

  getOneLeague() {
    this.crud.getOne('http://localhost:8000/api/league', this.leagueId)
      .subscribe(league => {
        console.log(league);
        this.league = league;
      });
  }

}
