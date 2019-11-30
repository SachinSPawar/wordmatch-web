import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Response} from './response'
import {Observable} from 'rxjs'
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class WordmatchService {

  constructor(private httpClient: HttpClient) { }

  public checkIfWordIsValid(word : string) : Observable<Response> {
    return this.httpClient.get<Response>("http://127.0.0.1:5000/word/validate?word="+word);
  }

  public startNewGame() : Observable<State> {
    return this.httpClient.get<State>("http://127.0.0.1:5000/word/new");
  }

  public getGameState() : Observable<State> {
    return this.httpClient.get<State>("http://127.0.0.1:5000/word/state");
  }

  public gameOver() : Observable<State> {
    return this.httpClient.get<State>("http://127.0.0.1:5000/word/end");
  }


}
