import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {
  }

  getAll(url: string) {
    return this.http.get(url);
  }

  getOne(url: string, id: number) {
    return this.http.get((url + '/' + id));
  }
}
