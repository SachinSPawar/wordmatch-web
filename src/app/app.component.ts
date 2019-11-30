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

  gameStatus=""
  word="";

  ngOnInit() {
    this.gameStatus="NEW"
    this.wordmatchService.getGameState().subscribe((response)=>{
      this.state=response;
    })    

  }

  iSValidWord(){
    this.wordmatchService.checkIfWordIsValid(this.word).subscribe((response)=>{
      let isValid=response.result;
      if(isValid){
        this.wordmatchService.getGameState().subscribe((response)=>{
          this.state=response;
        })  
      }
    })
  }

  gameOver(){
    this.gameStatus="ENDED"
    this.wordmatchService.gameOver().subscribe((response)=>{
      this.state=response;
    })
  }

  newGame(){
    this.word=""
    this.gameStatus="INPROGRESS"
    this.wordmatchService.startNewGame().subscribe((response)=>{
      this.state=response;
    })
  }

  characters(){
    return this.state.characters.split('');
  }

}
