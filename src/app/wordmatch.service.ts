import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Response} from './response'
import {Observable} from 'rxjs'
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class WordmatchService {

  private baseUrl="https://wordsmatch-backend.herokuapp.com/";

  constructor(private httpClient: HttpClient) { }

  public checkIfWordIsValid(word : string) : Observable<Response> {
    return this.httpClient.get<Response>(this.baseUrl+"word/validate?word="+word);
  }

  public startNewGame() : Observable<State> {
    return this.httpClient.get<State>(this.baseUrl+"word/new");
  }

  public getGameState() : Observable<State> {
    return this.httpClient.get<State>(this.baseUrl+"word/state");
  }

  public gameOver() : Observable<State> {
    return this.httpClient.get<State>(this.baseUrl+"word/end");
  }


}
