var basicActions = {
  displayText: function(){
      myElement.textContent = '';
      myElement.textContent = wordArray.join('');
  },
  displayAction:function(){    
    var swipeRightCount = 0;

    //If the array contains a tap then enter https://
    if(selectedActions.length == fingerMoves[0]){
       if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
         if(selectedActions[1].type == singleTapString){
            if(wordArray.length > 0){
              webSurf.url = 'https://' + wordArray.join('');              
              webSurf.getAudioText();
            }
         }
       }
    }
    //If the array contains a two taps then enter http://
    if(selectedActions.length == fingerMoves[1]){
       if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' && 
        selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
         if(selectedActions[0].type == singleTapString && selectedActions[1].type == singleTapString ){
            if(wordArray.length > 0){
              webSurf.url = 'http://' + wordArray.join('');
              webSurf.getAudioText();
            }
         }
       }
    }
    //If the array contains a swipe right and tap then its a stop
    if(selectedActions.length == fingerMoves[1]){
       if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' && 
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString && selectedActions[1].type == singleTapString){
            feedback.stopMediaFile();
          }
       }
    }
    //If the array contains a swipe right and swipe down then its a bookmark
    if(selectedActions.length == fingerMoves[1]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString && selectedActions[1].type == swipeDownString){
            webSurf.setBookmark();
          }
       }
    }
    //If the array contains a swipe up and tap then read bookmark
    if(selectedActions.length == fingerMoves[1]){
        if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
          if(selectedActions[0].type == swipeUpString && selectedActions[1].type == singleTapString){
             webSurf.readBookmark();
          }
       }
    }

  },  
}