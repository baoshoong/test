import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, FormsModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent {
  title = 'first_project'

  constructor(){
    this.changeWord();
  }
  buttons = [
    {
      top : [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ]
    },
    {
      middle : ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    },
    {
      bottom : ['z', 'x', 'c', 'v', 'b','n','m']
    }
  ]

  input = ('');
  text = ('');
  point = 0;
  time = 10;
  myWord = ["hello","world", "haha"];
  word ="";
  resultMessage='';

  changeWord(){
    let index = Math.floor(Math.random() * this.myWord.length)
    this.word = this.myWord[index]
  }
  

  @HostListener('document:keypress',['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
  if(event.key == "Enter"){
    this.checkAnswer();
    }
  }

  checkAnswer() {
    if (this.input == this.word) {
        this.point++;
        this.resultMessage = "Correct!";

        
    } else {
        this.point--;
        this.resultMessage = "Incorrect!";     
    }
    this.input = ''
    this.changeWord(); 

  }

  startGame(){
    
    let timeInterval = setInterval(() =>{
     this.time --;
     if(this.time == 0){
       this.word = 'het gio: ' + this.point  + ' diem';
       clearInterval(timeInterval);
       
     }
   }, 1000)
 }
}