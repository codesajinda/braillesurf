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
   if(feedback.myMedia !=  null){
      feedback.myMedia.getCurrentPosition(function(position){
        alert(feedback.isAudioPaused);
        if(feedback.isAudioPaused != false){
           if (position > -0.01) {
              alert(position);
              feedback.stopMediaFile();
              feedback.myMedia = new Media(url, feedback.onSuccess, feedback.onError);
              feedback.myMedia.play();
           }
           else{
              feedback.myMedia = new Media(url, feedback.onSuccess, feedback.onError);
              feedback.myMedia.play();
           }
       }
       else{
          feedback.myMedia.play();
       }

      }, function(){
          feedback.beep();
      });      
    }
    else{
        alert("media null");
        var media = new Media(url, feedback.onSuccess, feedback.onError);
        media.play();
    }
  },
  pauseMediaFile:function(){
    alert("pausing");
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
     alert(error);
    feedback.beep();
  },
  beep:function(){
      navigator.notification.beep(1);
  }
}