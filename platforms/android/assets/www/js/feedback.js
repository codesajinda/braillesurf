var feedback = {
  myMedia:null,
  completeUrl:null,
  isAudioPaused:false,
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
    alert(url);
    alert(feedback.myMedia);
    //If the audio hasnt been paused
    if(feedback.isAudioPaused == false){
      feedback.myMedia = new Media(url, feedback.onSuccess, feedback.onError);
    }
    feedback.myMedia.getCurrentPosition(function(position){    
      feedback.myMedia.play();
      alert(position);
    }, function(){
        feedback.beep();
    }); 
  },
  pauseMediaFile:function(){
    feedback.isAudioPaused = true;
    feedback.myMedia.pause();
  },
  stopMediaFile:function(){
    feedback.myMedia.stop();
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
    feedback.beep();
  },
  beep:function(){
      navigator.notification.beep(1);
  }
}