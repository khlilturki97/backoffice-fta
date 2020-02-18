import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../_services/crud.service';

@Component({
  selector: 'app-list-league',
  templateUrl: './list-league.component.html',
  styleUrls: ['./list-league.component.scss']
})
export class ListLeagueComponent implements OnInit {

  leagues;
  loading;

  constructor(private crud: CrudService) {
  }

  ngOnInit() {
    this.getAllLeagues();
  }

  getAllLeagues() {
    this.loading = true;
    this.crud.getAll('http://localhost:8000/api/league')
      .subscribe(leagues => {
        this.leagues = leagues;
        this.loading = false;
      });
  }

}
