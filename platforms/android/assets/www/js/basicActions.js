var basicActions = {
  displayText: function(){
      myElement.textContent = '';
      myElement.textContent = wordArray.join('');
      hasAValue = true;
      selectedActions = [];
  },
  displayAction:function(){    
    var swipeRightCount = 0;

    //If the array contains a swipe down and tap then enter https://
    if(selectedActions.length == fingerMoves[1]){
       if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
         if(selectedActions[0].type == swipeDownString && selectedActions[1].type == singleTapString){
            if(wordArray.length > 0){
              webSurf.url = 'https://' + wordArray.join('');              
              webSurf.readPage();
            }
         }
       }
    }
    //If the array contains a swipe down then enter http://
    if(selectedActions.length == fingerMoves[0]){
       if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
         if(selectedActions[0].type == swipeDownString){
            if(wordArray.length > 0){
              webSurf.url = 'http://' + wordArray.join('');
              webSurf.readPage();
            }
         }
       }
    }
    //If the array contains a swipe right then its a read
    if(selectedActions.length == fingerMoves[0]){
       if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
         if(selectedActions[0].type == swipeRightString){
            if(swipeRightCount == 0){
                //If the call to read the page has been initalized then get audio text
                if(webSurf.url != null){              
                  var urlToFile = webSurf.getAudioText();
                  feedback.playMediaFile(urlToFile);
                }
            }
         }
       }
    }
    //If the array contains a tap then its a pause
    if(selectedActions.length == fingerMoves[0]){
       if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
         if(selectedActions[0].type == singleTapString){
            feedback.pauseMediaFile();
         }
       }
    }
  },  
}