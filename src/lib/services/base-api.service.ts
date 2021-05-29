import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(
    private httpClient: HttpClient,
    private url: string) { }

  public getWithResponse<T>(
    endpoint: string,
    headers?: HttpHeaders,
    params?: HttpParams
  ): Observable<HttpResponse<T>> {
    return this.httpClient.get<T>(this.getAPIUrl(endpoint), {
      observe: "response",
      withCredentials: true,
      headers,
      params
    });
  }

  public getBlobWithResponse(endpoint: string): Observable<HttpResponse<Blob>> {
    return this.httpClient.get(this.getAPIUrl(endpoint), {
      observe: "response",
      responseType: "blob",
      withCredentials: true
    });
  }

  public postWithResponse<T>(
    endpoint: string,
    requestBody: object | string,
    headers?: HttpHeaders
  ): Observable<HttpResponse<T>> {
    return this.httpClient.post<T>(this.getAPIUrl(endpoint), requestBody, {
      observe: "response",
      withCredentials: true,
      headers
    });
  }

  public putWithResponse<T>(
    endpoint: string,
    requestBody: object | string,
    headers?: HttpHeaders
  ): Observable<HttpResponse<T>> {
    return this.httpClient.put<T>(this.getAPIUrl(endpoint), requestBody, {
      observe: "response",
      withCredentials: true,
      headers
    });
  }

  public deleteWithResponse<T>(
    endpoint: string,
    headers?: HttpHeaders
  ): Observable<HttpResponse<T>> {
    return this.httpClient.delete<T>(this.getAPIUrl(endpoint), {
      observe: "response",
      withCredentials: true,
      headers
    });
  }

  private getAPIUrl(endpoint: string): string {
    return `${this.url}/${endpoint}`;
  }
}
