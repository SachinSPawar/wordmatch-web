import { Component, OnInit } from '@angular/core';

import {WordmatchService} from './wordmatch.service'
import { State } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private wordmatchService: WordmatchService){}
  
  state:State ={
    words:[],
    characters:"",
    score:0
  }

  word="";

  ngOnInit() {
    this.wordmatchService.getGameState().subscribe((response)=>{
      this.state=response;
    })    

  }

  iSValidWord(){
    this.wordmatchService.checkIfWordIsValid(this.word).subscribe((response)=>{
      let isValid=response.result;
      if(isValid){
        this.state.words.push(this.word);
      }
    })
  }

  gameOver(){
    this.wordmatchService.gameOver().subscribe((response)=>{
      this.state=response;
    })
  }

  newGame(){
    this.word=""
    this.wordmatchService.startNewGame().subscribe((response)=>{
      this.state=response;
    })
  }

}
