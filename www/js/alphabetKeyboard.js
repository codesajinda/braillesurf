var alphabetKeyboard = {  
  soundFolder:'alphabet',
	capitalAlphabet : [{letter : 'A'}, {letter: 'B'}, {letter: 'C'}, {letter: 'D'}, {letter:'E'}, {letter: 'F'}, {letter: 'G'}, 
						{letter:'H'}, {letter:'I'}, {letter:'J'}, {letter:'K'}, {letter:'L'}, {letter:'M'}, {letter:'N'},
						{letter:'O'}, {letter:'P'}, {letter:'Q'}, {letter:'R'}, {letter:'S'}, {letter:'T'}, {letter:'U'}, 
						{letter:'V'}, {letter:'W'}, {letter:'X'}, {letter:'Y'}, {letter:'Z'}],

	displayValue:function(){	
	  //If the array contains just one element and if its a single tap then its an A    
      if(selectedActions.length == fingerMoves[0]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
          if(selectedActions[0].type == singleTapString){         
            //A
            feedback.playAudio(this.capitalAlphabet[0].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[0].letter);            
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just two elements and if its a swipe down, single tap then its an B
      if(selectedActions.length == fingerMoves[1]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' && 
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString  && selectedActions[1].type == singleTapString){
            //B
            feedback.playAudio(this.capitalAlphabet[1].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[1].letter);
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just one element and if its a swipe right then its an C
      if(selectedActions.length == fingerMoves[0]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString){
            //C
            feedback.playAudio(this.capitalAlphabet[2].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[2].letter);  
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just three elements and if its a swipe right, swipe down, and single tap then its an D
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' && 
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString && selectedActions[1].type == swipeDownString 
            && selectedActions[2].type == singleTapString){
            //D                
            feedback.playAudio(this.capitalAlphabet[3].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[3].letter);  
            basicActions.displayText();
            return;
          }
        } 
      } 

      //If the array contains just one element and if its a swipe down right then its an E
      if(selectedActions.length == fingerMoves[0]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
          if(selectedActions[0].type == swipeDownRightString){
            //E
            feedback.playAudio(this.capitalAlphabet[4].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[4].letter);  
            basicActions.displayText(); 
            return;
          }
        }
      }

      //If the array contains just three elements and if its a swipe left, swipe down, and a single tap then its an F
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' && 
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeLeftString && selectedActions[1].type == swipeDownString 
            && selectedActions[2].type == singleTapString){
            //F               
            feedback.playAudio(this.capitalAlphabet[5].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[5].letter);  
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just five elements and if its a swipe right, swipe down, tap, swipe left and a swipe up then its an G
      if(selectedActions.length == fingerMoves[4]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' && 
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined' &&
          selectedActions[3] != null && typeof (selectedActions[3]) !=='undefined' &&
          selectedActions[4] != null && typeof (selectedActions[4])){
          if(selectedActions[0].type == swipeRightString && selectedActions[1].type == swipeDownString 
            && selectedActions[2].type == singleTapString && selectedActions[3].type == swipeLeftString 
            && selectedActions[4].type == swipeUpString ){
            //G               
            feedback.playAudio(this.capitalAlphabet[6].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[6].letter); 
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just three elements and if its a swipe down, single tap, and a swipe right then its an H
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString && selectedActions[1].type == singleTapString
            && selectedActions[2].type == swipeRightString){
            //H               
            feedback.playAudio(this.capitalAlphabet[7].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[7].letter);  
            basicActions.displayText();  
            return;
          }
        }
      }

      //If the array contains just one element and if its a swipe down left then its an I
      if(selectedActions.length == fingerMoves[0]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
          if(selectedActions[0].type == swipeDownLeftString){
            //I                 
            feedback.playAudio(this.capitalAlphabet[8].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[8].letter);   
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just three elements and if its a swipe down, single tap and a swipe left then its an J
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString && selectedActions[1].type == singleTapString 
            && selectedActions[2].type == swipeLeftString){
            //J                 
            feedback.playAudio(this.capitalAlphabet[9].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[9].letter);   
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just three elements and if its a swipe down, single tap, and a swipe down then its an K
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString && selectedActions[1].type == singleTapString 
            && selectedActions[2].type == swipeDownString){
            //K              
            feedback.playAudio(this.capitalAlphabet[10].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[10].letter);   
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just one element and if its a swipe down then its an L
      if(selectedActions.length == fingerMoves[0]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString){
            //L                
            feedback.playAudio(this.capitalAlphabet[11].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[11].letter);            
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just four elements and if its a swipe left, swipe down, single tap, and a swipe down then its an M
      if(selectedActions.length == fingerMoves[3]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined' &&
          selectedActions[3] != null && typeof (selectedActions[3]) !=='undefined'){
          if(selectedActions[0].type == swipeLeftString  && selectedActions[1].type == swipeDownString 
            && selectedActions[2].type == singleTapString && selectedActions[3].type == swipeDownString){
            //M              
            feedback.playAudio(this.capitalAlphabet[12].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[12].letter);
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just two elements and if its a swipe right, swipe down, tap, and a swipe down left then its an N
      if(selectedActions.length == fingerMoves[3]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' && 
          selectedActions[2] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[3] != null && typeof (selectedActions[1]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString && selectedActions[1].type == swipeDownString 
            && selectedActions[2].type == singleTapString && selectedActions[3].type == swipeDownLeftString){
            //N              
            feedback.playAudio(this.capitalAlphabet[13].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[13].letter);
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just two elements and if its a swipe down right and a swipe down left then its an O
      if(selectedActions.length == fingerMoves[1]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
          if(selectedActions[0].type == swipeDownRightString && selectedActions[1].type == swipeDownLeftString){
            //O                
            feedback.playAudio(this.capitalAlphabet[14].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[14].letter);
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just two elements and if its a swipe left and a swipe down then its an P
      if(selectedActions.length == fingerMoves[1]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){    
          if(selectedActions[0].type == swipeLeftString  && selectedActions[1].type == swipeDownString){
            //P                
            feedback.playAudio(this.capitalAlphabet[15].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[15].letter);
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just five elements and if its a swipe up, swipe right, swipe down, tap, and swipe left then its an Q
      if(selectedActions.length == fingerMoves[4]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined' &&
          selectedActions[3] != null && typeof (selectedActions[3]) !=='undefined' &&
          selectedActions[4] != null && typeof (selectedActions[4]) !=='undefined'){
          if(selectedActions[0].type == swipeUpString  && selectedActions[1].type == swipeRightString  
            && selectedActions[2].type == swipeDownString && selectedActions[3].type == singleTapString 
            && selectedActions[4].type == swipeLeftString){
            //Q              
            feedback.playAudio(this.capitalAlphabet[16].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[16].letter);
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just two elements and if its a swipe down, and a swipe right, and swipe down then its an R
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString  && selectedActions[1].type == swipeRightString 
            && selectedActions[2].type == swipeDownString){
            //R              
            feedback.playAudio(this.capitalAlphabet[17].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[17].letter);
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just two elements and if its a swipe down left and a swipe down then its an S
      if(selectedActions.length == fingerMoves[1]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
          if(selectedActions[0].type == swipeDownLeftString && selectedActions[1].type == swipeDownString){
            //S                
            feedback.playAudio(this.capitalAlphabet[18].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[18].letter);
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just four elements and if its a swipe down, tap,  swipe left, and a swipe down then its an T
      if(selectedActions.length == fingerMoves[3]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined' &&
          selectedActions[3] != null && typeof (selectedActions[3]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString  && selectedActions[1].type == singleTapString 
           && selectedActions[2].type == swipeLeftString && selectedActions[3].type == swipeDownString){
            //T              
            feedback.playAudio(this.capitalAlphabet[19].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[19].letter);
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just three elements and if its a swipe down, single tap, swipe down, and a swipe right then its an U
      if(selectedActions.length == fingerMoves[3]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined' &&
          selectedActions[3] != null && typeof (selectedActions[3]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString  && selectedActions[1].type == singleTapString 
            && selectedActions[2].type == swipeDownString && selectedActions[3].type == swipeRightString){
            //U              
            feedback.playAudio(this.capitalAlphabet[20].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[20].letter);
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just two elements and if its a swipe down and a swipe right then its an V
      if(selectedActions.length == fingerMoves[1]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString  && selectedActions[1].type == swipeRightString){
            //V                
            feedback.playAudio(this.capitalAlphabet[21].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[21].letter);
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just two elements and if its a swipe down, swipe left, and swipe down then its an W
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString && selectedActions[1].type == swipeLeftString 
            && selectedActions[2].type == swipeDownString){
            //W              
            feedback.playAudio(this.capitalAlphabet[22].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[22].letter);
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just two elements and if its a swipe right, and a swipe right then its an X
      if(selectedActions.length == fingerMoves[1]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString  && selectedActions[1].type == swipeRightString){
            //X                
            feedback.playAudio(this.capitalAlphabet[23].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[23].letter);
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just three elements and if its a swipe right, swipe down, and a swipe left then its an Y
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString  && selectedActions[1].type == swipeDownString 
            && selectedActions[2].type == swipeLeftString){
            //Y              
            feedback.playAudio(this.capitalAlphabet[24].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[24].letter);
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just three elements and if its a swipe down right, swipe down, and a swipe left then its an Z
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeDownRightString && selectedActions[1].type == swipeDownString 
            && selectedActions[2].type == swipeLeftString){
            //Z              
            feedback.playAudio(this.capitalAlphabet[25].letter.toLowerCase(), this.soundFolder);
            wordArray.push(this.capitalAlphabet[25].letter);
            basicActions.displayText();
            return;
          } 
        }
      }

	},
}