import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscogsService {
  private readonly baseUrl = 'https://api.discogs.com';

  constructor(private http: HttpClient) {}

  getRelease(id: any) {
    return this.http.get(`${this.baseUrl}/releases/${id}`);
  }

  
} 