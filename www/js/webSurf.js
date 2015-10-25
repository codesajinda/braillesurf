var webSurf = {
  url:null,
  serverPath:'http://www.csmasterpiece.com/reader/',
  returnedHtml:null,
  currentAccessingWebsite:null,
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
  readPage:function() {      
    var key = JSON.parse(storage.getItem('key'));
    var data  = {siteurl:webSurf.url, user:{UserID:key.UserID, Key:key.Key, IsActive:key.IsActive}, action:'ReadContent'};
    var pageContents = [];
    var result = webSurf.postToServer(webSurf.serverPath + 'BrailleSurf.php', data);

    if(result != null){
      var html = $(result.content);
      webSurf.currentAccessingWebsite = result.siteurl;
      html.contents().each(function processNodes ()
      {
          if (this.nodeType == 3){ 
              var text = $(this).text().trim();
              if(text != ''){
                pageContents.push(text);
              }
          }
          else{ 
              if(webSurf.getReadableTagName(this.nodeName).hasValue){                
                pageContents.push(webSurf.getReadableTagName(this.nodeName).readName);

              }
              $(this).contents().each(processNodes);
          }
      });
      webSurf.returnedHtml = encodeURI(pageContents.join(' '));
      alert(webSurf.returnedHtml);
    }
  },
  getAudioText:function(){
      var key = JSON.parse(storage.getItem('key'));
      var data  = {src:webSurf.returnedHtml, siteurl:webSurf.currentAccessingWebsite, user:{UserID:key.UserID, Key:key.Key, IsActive:key.IsActive}, action:'GetAudioText'};
      var result = webSurf.postToServer(webSurf.serverPath + 'BrailleSurf.php', data);
      var urlToFile = null;
      if(result != null){
        urlToFile = webSurf.serverPath + result.fileName;
      }
      return urlToFile;
  },
  bookmark:function(){
      var key = JSON.parse(storage.getItem('key'));
      var url = wordArray.join('').replace(/^(https?|http):\/\//, '');
      var data  = {src:url, user:{UserID:key.UserID, Key:key.Key, IsActive:key.IsActive}, action:'Bookmark'};
      var result = webSurf.postToServer(webSurf.serverPath + 'BrailleSurf.php', data);
      if(result != null){
        var existingEntries = JSON.parse(localStorage.getItem("bookmarks"));
        if(existingEntries == null) existingEntries = [];
        var entry = {
          'bookmark': url,
          'url': webSurf.serverPath + result.fileName
        };
        existingEntries.push(entry);
        localStorage.setItem('bookmarks', JSON.stringify(existingEntries));
      }
  },
  postToServer:function(url, data){
    var result = null;
    alert(JSON.stringify(data));
    $.ajax({
          method: "POST",
          url: url,
          data:data,
          async:false
        })
        .done(function(msg) {
          result = JSON.parse(msg);
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

