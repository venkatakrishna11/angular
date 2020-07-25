import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(endpoint) {
    const baseUrl = environment.baseUrl;
    const url = `${baseUrl}${endpoint}`;
    return this.http.get(url);
  }
}
