var feedback = {
  myMedia:null,
  completeUrl:null,
  androidPath:'/android_asset/www/sounds/',
  screenStateVoiceMessages:['alphabetKeyboard',  'punctuationKeyboard', 'numberKeyboard', 'basicActions', 'bookmarks', 'history'],
  voiceMessages:['sorryIDidNotGetYou', 'deletedLastLetter'],
	vibrate:function(time){	
      navigator.vibrate(time);
	},
  vibrateWithPattern:function(times){ 
      navigator.vibrate([times]);
  },
  playAudio:function(value, folder){    
    this.completeUrl = this.androidPath + folder + '/' +  value + '.mp3';
    alert(this.completeUrl);
    feedback.playMediaFile(this.completeUrl);        
  },
  playMediaFile:function(url){ 
    var myMedia = new Media(url, onSuccess, onError);
    myMedia.play();  
  },
  playVoiceMessage:function(index){
    feedback.playAudio(this.voiceMessages[index], 'general');
  },
  playVoiceScreenState:function(index){ 
    feedback.playAudio(this.screenStateVoiceMessages[index], 'general');
  },
  onSuccess:function() {   
      console.log("playAudio():Audio Success");
  },
  onError:function(error) {
    alert("error");
    feedback.beep();
  },
  beep:function(){
      navigator.notification.beep(1);
  }
}