import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonneesReellesService {

  private URL_REST_API = 'http://152.228.165.238:8080';

  constructor(private http: HttpClient) {
  }

  getAllSituationReelle(): Observable<any> {
    return this.http.get(this.URL_REST_API + '/reel/complet');
  }

  // TODO : Autres appels APIs

}
