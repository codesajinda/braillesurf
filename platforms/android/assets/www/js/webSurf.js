var webSurf = {
  url:null,
  serverPath:'http://www.csmasterpiece.com/reader/',
  bookmarks:null,
  currentBookmarkItem:0,
  setKey:function(){  
    if(storage.getItem('key') == null){
      var data =  {action:'GetKey'};
      var result = webSurf.postToServer(webSurf.serverPath + 'BrailleSurf.php', data);
      if(result != null){
        storage.setItem('key', JSON.stringify(result.key));    
        feedback.vibrate(2000);
      }
    }
    else{
        feedback.vibrate(2000);
    }
  },
  
  getAudioText:function(){
      var key = JSON.parse(storage.getItem('key'));
      var data  = {siteurl:webSurf.url, user:{UserID:key.UserID, Key:key.Key, IsActive:key.IsActive}, action:'GetAudioText'};
      var result = webSurf.postToServer(webSurf.serverPath + 'BrailleSurf.php', data);
      var urlToFile = null;
      if(result != null){
        urlToFile = webSurf.serverPath + result.fileName;
      }
      return urlToFile;
  },
  setBookmark:function(){
      var key = JSON.parse(storage.getItem('key'));     
      var existingEntries = JSON.parse(localStorage.getItem("bookmarks"));
      if(existingEntries == null) existingEntries = [];
      var entry = {
        'bookmark': webSurf.url
      };
      existingEntries.push(entry);
      localStorage.setItem('bookmarks', JSON.stringify(existingEntries));
  },
  readBookmark:function(){
    if(webSurf.bookmarks == null){
      var key = JSON.parse(storage.getItem('key'));     
      var existingEntries = localStorage.getItem("bookmarks");
      if(existingEntries != null){
          var data  = {bookmarks:existingEntries, user:{UserID:key.UserID, Key:key.Key, IsActive:key.IsActive}, action:'GetBookmarks'};
          var result = webSurf.postToServer(webSurf.serverPath + 'BrailleSurf.php', data);
          if(result != null){
            webSurf.bookmarks = result.bookmarks;
            feedback.playAudio(webSurf.bookmarks[webSurf.currentBookmarkItem].audiourl);
          }
      }
      else{
         feedback.playVoiceMessage(2);
      }
    }
    else{
      webSurf.currentBookmarkItem = webSurf.currentBookmarkItem + 1;
      feedback.playAudio(webSurf.bookmarks[webSurf.currentBookmarkItem].audiourl);
    }
  },
  postToServer:function(url, data){
    var result = null;
    $.ajax({
          method: "POST",
          url: url,
          data:data,
          async:false
        })
        .done(function(msg) {
          result = JSON.parse(msg);
          alert(msg);
          if(result.error != null){
            feedback.playAudio('error', result.error);
            result = null;
          }
          else{
            hasAValue = true;
            feedback.vibrate(2000);
          }
        }).fail(function(xhr, textStatus, errorThrown) {
          feedback.beep();
        });
    return result;
  },
  getReadableTagName:function(tag){
    var readableName = {}
    readableName.hasValue = false;
    switch(tag) {
      case 'H1':
          readableName.hasValue = true;
          readableName.readName = 'Heading';
          break;
      case 'H2':
      case 'H3':
      case 'H4':
      case 'H2':
      case 'H6':
          readableName.hasValue = true;
          readableName.readName = 'Sub Heading';          
          break;
      case 'P':
          readableName.hasValue = true;
          readableName.readName = 'Paragraph';
          break;
      case 'A':
          readableName.hasValue = true;
          readableName.readName = 'Link';
          break;
      default:
          break;
    }
    return readableName;
  }
}

