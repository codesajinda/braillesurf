var numericKeyboard = {
  soundFolder:'number',
  numeric : [{name:'one', symbol:1}, {name:'two', symbol:2}, {name:'three', symbol:3}, 
            {name:'four', symbol:4}, {name:'five', symbol:5}, {name:'six', symbol:6}, 
            {name:'seven', symbol:7}, {name:'eight', symbol:8}, {name:'nine', symbol:9}, {name:'zero', symbol:0}],

	displayValue:function(){		
      //If the array contains just one elements and if its a single tap then its a 1   
      if(selectedActions.length == fingerMoves[0]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
          if(selectedActions[0].type == singleTapString){         
            //1                             
            feedback.playAudio(this.numeric[0].name, this.soundFolder);
            wordArray.push(this.numeric[0].symbol); 
            basicActions.displayText();
            return;
          } 
        }
      }

      //If the array contains just two elements and if its a swipe down, and single tap then its a 2   
      if(selectedActions.length == fingerMoves[1]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' && 
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString  && selectedActions[1].type == singleTapString){
            //2            
            feedback.playAudio(this.numeric[1].name, this.soundFolder);
            wordArray.push(this.numeric[1].symbol);
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just one element and if its a swipe right then its an 3
      if(selectedActions.length == fingerMoves[0]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString){
            //3
            feedback.playAudio(this.numeric[2].name, this.soundFolder);
            wordArray.push(this.numeric[2].symbol);
            basicActions.displayText();
            return;
          }
        }
      }

      //If the array contains just three elements and if its a swipe right, swipe down, and single tap then its an 4
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' && 
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' && 
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString && selectedActions[1].type == swipeDownString 
            && selectedActions[2].type == singleTapString){
            //4                           
            feedback.playAudio(this.numeric[3].name, this.soundFolder);
            wordArray.push(this.numeric[3].symbol);   
            basicActions.displayText();
            return;
          }
        } 
      } 

      //If the array contains just one element and if its a swipe down right then its an 5
      if(selectedActions.length == fingerMoves[0]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
          if(selectedActions[0].type == swipeDownRightString){
            //5                              
            feedback.playAudio(this.numeric[4].name, this.soundFolder);             
            wordArray.push(this.numeric[4].symbol);     
            basicActions.displayText();  
            return;
          }
        }
      }

      //If the array contains just three elements and if its a swipe left, swipe down, and a single tap then its an 6
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' && 
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeLeftString && selectedActions[1].type == swipeDownString
            && selectedActions[2].type == singleTapString){
            //6           
            feedback.playAudio(this.numeric[5].name, this.soundFolder);
            wordArray.push(this.numeric[5].symbol); 
            basicActions.displayText();  
            return;
          }
        }
      }

      //If the array contains just four elements and if its a swipe right, swipe down, single tap, swipe left and a swipe up then its an 7
      if(selectedActions.length == fingerMoves[4]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' && 
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined' &&
          selectedActions[3] != null && typeof (selectedActions[3]) !=='undefined' &&
          selectedActions[4] != null && typeof (selectedActions[4]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString && selectedActions[1].type == swipeDownString 
            && selectedActions[2].type == singleTapString && selectedActions[3].type == swipeLeftString 
            && selectedActions[4].type == swipeUpString){
            //7          
            feedback.playAudio(this.numeric[6].name, this.soundFolder);
            wordArray.push(this.numeric[6].symbol);   
            basicActions.displayText();  
            return;
          } 
        }
      }

      //If the array contains just two elements and if its a swipe down, single tap, and a swipe up then its an 8
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString && selectedActions[1].type == singleTapString 
            && selectedActions[2].type == swipeUpString){
            //8   
            feedback.playAudio(this.numeric[7].name, this.soundFolder);            
            wordArray.push(this.numeric[7].symbol); 
            basicActions.displayText();  
            return;
          }
        }
      }

      //If the array contains just one element and if its a swipe down left then its an 9
      if(selectedActions.length == fingerMoves[0]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
          if(selectedActions[0].type == swipeDownLeftString){
            //9   
            feedback.playAudio(this.numeric[8].name, this.soundFolder);             
            wordArray.push(this.numeric[8].symbol);  
            basicActions.displayText();  
            return;
          }
        }
      }

      //If the array contains just three elements and if its a swipe down, single tap and a swipe left then its an 0
      if(selectedActions.length == fingerMoves[2]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined' &&
          selectedActions[2] != null && typeof (selectedActions[2]) !=='undefined'){
          if(selectedActions[0].type == swipeDownString && selectedActions[1].type == singleTapString 
            && selectedActions[2].type == swipeLeftString){
            //0             
            feedback.playAudio(this.numeric[9].name, this.soundFolder);
            wordArray.push(this.numeric[9].symbol);    
            basicActions.displayText();  
            return;
          }
        }
      }
	},
}