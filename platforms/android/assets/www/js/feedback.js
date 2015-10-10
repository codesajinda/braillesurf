var feedback = {
  completeUrl:null,
  myMedia:null,
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
   feedback.myMedia = new Media(url, 
      function(){  
        feedback.myMedia.release();
    }, function(){
        feedback.beep();
    });
    feedback.myMedia.play();
  },
  playVoiceMessage:function(index){
    feedback.playAudio(this.voiceMessages[index], 'general');
  },
  playVoiceScreenState:function(index){ 
    hasValue = true;
    feedback.playAudio(this.screenStateVoiceMessages[index], 'general');
  },
  onSuccess:function() {
    feedback.myMedia.release();
  },
  onError:function(error) {
    alert("error");
    feedback.beep();
  },
  beep:function(){
      navigator.notification.beep(1);
  },
  pauseMediaFile:function(){

  },
}