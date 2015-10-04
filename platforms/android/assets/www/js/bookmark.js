var bookmark = {
  nextIndex:0,
  displayAction:function(){ 
    //If the array contains a swipe down and tap then bookmark
    if(selectedActions.length == fingerMoves[1]){
       if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined' &&
          selectedActions[1] != null && typeof (selectedActions[1]) !=='undefined'){
         if(selectedActions[0].type == swipeDownString && selectedActions[1].type == singleTapString){
              webSurf.bookmark();
          }          
       }
    }

    //If the array contains a swipe right then read bookmark
    if(selectedActions.length == fingerMoves[0]){
       if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
          if(selectedActions[0].type == swipeRightString){
            var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
            alert(bookmarks.length);
            alert(bookmarks[bookmark.nextIndex].url);
            if((bookmarks.length - 1) == bookmark.nextIndex) bookmark.nextIndex = 0;
            feedback.playMediaFile(bookmarks[bookmark.nextIndex].url);
            myElement.textContent = bookmarks[bookmark.nextIndex].bookmark;
            bookmark.nextIndex = bookmark.nextIndex + 1;
          }          
       }
    }
  },  
}