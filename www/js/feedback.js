var feedback = {
  completeUrl:null,
  myMedia:null,
  isPaused: false,
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
    feedback.playMediaFile(this.completeUrl);        
  },
  playMediaFile:function(url){     
   hasAValue = true;
   if(feedback.isPaused == false){
      feedback.myMedia = new Media(url, feedback.onSuccess, feedback.onError);
   }
   else{
      feedback.isPaused = false;
   }
   feedback.myMedia.play();
   selectedActions = [];
  },
  playVoiceMessage:function(index){
    feedback.playAudio(this.voiceMessages[index], 'general');
  },
  playVoiceScreenState:function(index){ 
    feedback.playAudio(this.screenStateVoiceMessages[index], 'general');
  },
  onSuccess:function() {
    feedback.myMedia.release();
  },
  onError:function(error) {
    feedback.beep();
  },
  beep:function(){
      navigator.notification.beep(1);
  },
  pauseMediaFile:function(){
      alert(feedback.myMedia);
      alert('pausing');
      feedback.myMedia.pause();
      feedback.isPaused = true;
  },
}