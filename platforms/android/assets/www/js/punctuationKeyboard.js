var punctuationKeyboard = {
  soundFolder:'punctuation',
  punctuation : [{name:'comma', symbol:','}, {name:'semicolon',symbol:';'}, {name:'colon', symbol:':'}, 
                {name:'dot', symbol:'.'}, {name:'exclamation', symbol:'!'}, {name:'openBracket', symbol:'('}, 
                {name:'closeBracket', symbol:')'}, {name:'questionMark', symbol:'?'}, {name:'doubleQuote', symbol:'"'}, 
                {name:'asterisk', symbol:'*'}, {name:'singleQuote', symbol:"'"}, {name:'hyphen', symbol:'-'}],

	displayValue:function(){		
    //If the array contains just three elements and if its a single tap, swipe down, and a single tap then its an ,     
    if(selectedActions.length == fingerMoves[2]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
        selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
        selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
        if(selectedActions[0].type == singleTapString  && selectedActions[1].type == swipeDownString 
         && selectedActions[2].type == singleTapString){          
          //,
          feedback.playAudio(this.punctuation[0].name, this.soundFolder);          
          wordArray.push(this.punctuation[0].symbol);
          basicActions.displayText();
          return;
        } 
      }
    }

    //If the array contains just two elements and if its a single tap, and a swipe down then its an ;       
    if(selectedActions.length == fingerMoves[1]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
        selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
        if(selectedActions[0].type == singleTapString  && selectedActions[1].type == swipeDownString){          
          //;               
          feedback.playAudio(this.punctuation[1].name, this.soundFolder);          
          wordArray.push(this.punctuation[1].symbol); 
          basicActions.displayText();
          return;
        } 
      }
    }

    //If the array contains just one element and if its a single right then its an :      
    if(selectedActions.length == fingerMoves[0]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
        if(selectedActions[0].type == swipeRightString){          
          //:                         
          feedback.playAudio(this.punctuation[2].name, this.soundFolder);          
          wordArray.push(this.punctuation[2].symbol); 
          basicActions.displayText();
          return;
        } 
      }
    }
   
    //If the array contains just two elements and if its a swipe right, and swipe down then its an .
    if(selectedActions.length == fingerMoves[1]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
        selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
        if(selectedActions[0].type == swipeRightString  && selectedActions[1].type == swipeDownString){          
          //.                                         
          feedback.playAudio(this.punctuation[3].name, this.soundFolder);
          wordArray.push(this.punctuation[3].symbol);  
          basicActions.displayText();
          return;
        } 
      }
    }

    //If the array contains just two elements and if its a swipe left, and swipe down then its an !   
    if(selectedActions.length == fingerMoves[1]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
        selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
        if(selectedActions[0].type == swipeLeftString  && selectedActions[1].type == swipeDownString){          
          //!                                                   
          feedback.playAudio(this.punctuation[4].name, this.soundFolder);
          wordArray.push(this.punctuation[4].symbol);
          basicActions.displayText();
          return;
        } 
      }
    }

    //If the array contains just five elements and if its a swipe right, swipe down, swipe left, swipe up, and single tap then its an (      
    if(selectedActions.length == fingerMoves[4]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
        selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
        selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined' &&
        selectedActions[3] != null && typeof (selectedActions[3]) !=='undefined' &&
        selectedActions[4] != null && typeof (selectedActions[4]) !=='undefined'){
        if(selectedActions[0].type == swipeRightString  && selectedActions[1].type == swipeDownString 
         && selectedActions[2].type == swipeLeftString && selectedActions[3].type == swipeUpString
         && selectedActions[4].type == singleTapString){          
          //(       
          feedback.playAudio(this.punctuation[5].name, this.soundFolder)
          wordArray.push(this.punctuation[5].symbol);
          basicActions.displayText();
          return;
        } 
      }
    }

     //If the array contains just six elements and if its a swipe left, swipe down, swipe right, swipe up, and single tap then its an )      
    if(selectedActions.length == fingerMoves[4]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
        selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
        selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined' &&
        selectedActions[3] != null && typeof (selectedActions[3]) !=='undefined' &&
        selectedActions[4] != null && typeof (selectedActions[4]) !=='undefined'){
        if(selectedActions[0].type == swipeLeftString  && selectedActions[1].type == swipeDownString 
         && selectedActions[2].type == swipeRightString && selectedActions[3].type == swipeUpString
         && selectedActions[4].type == singleTapString){          
          //(                      
          feedback.playAudio(this.punctuation[6].name, this.soundFolder);
          wordArray.push(this.punctuation[6].symbol);
          basicActions.displayText();
          return;
        } 
      }
    }

    //If the array contains just three element and if its a single tap, swipe down, and single right then its an ?  
    if(selectedActions.length == fingerMoves[2]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
        selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
        selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){       
             if(selectedActions[0].type == singleTapString  && selectedActions[1].type == swipeDownString 
             && selectedActions[2].type == swipeRightString){    
                 //?
                  feedback.playAudio(this.punctuation[7].name, this.soundFolder);
                  wordArray.push(this.punctuation[7].symbol);
                  basicActions.displayText();
                  return;
                   
              }      
          }      
      }

    //If the array contains just four element and if its a swipe left, swipe up, single tap, and single tap then its an "     
    if(selectedActions.length == fingerMoves[3]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
        selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
        selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined' &&
        selectedActions[3] != null && typeof (selectedActions[3]) !=='undefined'){       
             if(selectedActions[0].type == swipeLeftString  && selectedActions[1].type == swipeUpString 
             && selectedActions[2].type == singleTapString && selectedActions[3].type == singleTapString){    
                 //"       
                  feedback.playAudio(this.punctuation[8].name, this.soundFolder);                  
                  wordArray.push(this.punctuation[8].symbol);
                  basicActions.displayText();
                  return;
                   
              }      
          }      
      }

    //If the array contains just one element and if its a swipe down left then its an * 
    if(selectedActions.length == fingerMoves[0]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
        if(selectedActions[0].type == swipeDownLeftString ){
            //*                      
            feedback.playAudio(this.punctuation[9].name, this.soundFolder);            
            wordArray.push(this.punctuation[9].symbol);
            basicActions.displayText();
            return;
         }      
      }
    }

    //If the array contains just three elements and if its a single tap, single tap, and swipe down then its a '
    if(selectedActions.length == fingerMoves[2]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'
        && selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'
        && selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
        if(selectedActions[0].type == singleTapString && selectedActions[1].type == singleTapString
          && selectedActions[2].type == swipeDownString){
            //'                 
            feedback.playAudio(this.punctuation[10].name, this.soundFolder);            
            wordArray.push(this.punctuation[10].symbol);
            basicActions.displayText();
            return;
         }      
      }
    }

    //If the array contains just two elements and if its a swipe right and tap then its a -
    if(selectedActions.length == fingerMoves[1]){
      if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'
        && selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
        if(selectedActions[0].type == swipeRightString && selectedActions[1].type == singleTapString){
            //-           
            feedback.playAudio(this.punctuation[11].name, this.soundFolder);            
            wordArray.push(this.punctuation[11].symbol); 
            basicActions.displayText();
            return;
         }      
      }
    }
	},
}