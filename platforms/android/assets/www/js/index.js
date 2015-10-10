/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var singleTapString = 'tap';
var swipeLeftString  ='left';
var swipeRightString = 'right';
var swipeUpString = 'up';
var swipeDownString = 'down';
var swipeDownLeftString = 'downleft'; 
var swipeDownRightString = 'downright';
var selectedActions = [];
var wordArray = [];
var fingerMoves = [1,2,3,4,5];  
var myElement = document.getElementById('elem1');
var lastChange = 0;
//Checks whether any thing matched the provided set of gestures
var hasAValue = false;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function() { 
        //webSurf.setKey();
        app.appStart();
    },

    appStart: function(){    
        var tapHandler, pressHandler;

        tapPressInitialize(myElement, tapHandler, pressHandler);

        function tapHandler(){
          var singleTapObj = {};
          singleTapObj.type = singleTapString;
          selectedActions.push(singleTapObj);
        }

        function pressHandler(){
          feedback.vibrate(500);
          displayCharacter();
          selectedActions = [];
        }      

        $(myElement).swipe(function(direction) {
          switch(direction) {
            case swipeLeftString:
              var swipeLeftObj = {};  
              swipeLeftObj.type = direction;
              selectedActions.push(swipeLeftObj);  
            break;
            case swipeRightString:
              var swipeRightObj = {};
              swipeRightObj.type = direction;
              selectedActions.push(swipeRightObj);
            break;
            case swipeUpString:
              var swipeUpObj = {};  
              swipeUpObj.type = direction; 
              selectedActions.push(swipeUpObj);
            break;
            case swipeDownString: 
              var swipeDownObj = {};
              swipeDownObj.type = direction;
              selectedActions.push(swipeDownObj);
            break;
            case swipeDownLeftString: 
              var swipeDownLeftObj = {};
              swipeDownLeftObj.type = direction;
              selectedActions.push(swipeDownLeftObj);
            break;
            case swipeDownRightString:       
              var swipeDownRightObj = {};
              swipeDownRightObj.type = direction;
              selectedActions.push(swipeDownRightObj); 
            break;
            default:
              feedback.playVoiceMessage(0);
            break;
          }
        });

        function switchKeyboards(){   
            //If the array contains swipe up then move to the other keyboard
            if(selectedActions.length == fingerMoves[0]){
               if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
                 if(selectedActions[0].type == swipeUpString){
                    if(lastChange == 5){
                      lastChange = 0;
                    }
                    else{
                      lastChange = lastChange + 1;
                    }
                    playVoiceOnKeyboardChange(lastChange);
                 }
               }
               selectedActions = [];
            } 
        }

        function playVoiceOnKeyboardChange(index){
            switch(index) {
            case 0:
              feedback.playVoiceScreenState(0);
            break;
            case 1:
              feedback.playVoiceScreenState(1);
            break;
            case 2:
              feedback.playVoiceScreenState(2);
            break;
            case 3:
              feedback.playVoiceScreenState(3);
            break;    
            case 4:
              feedback.playVoiceScreenState(4);
            break;
            case 5:
              feedback.playVoiceScreenState(5);
            break;    
            default:
            break;
          }
        }

        function displayCharacter(){
          switch(lastChange) {
            case 0:
              alphabetKeyboard.displayValue();
              break;
            case 1:
              punctuationKeyboard.displayValue();
              break;
            case 2:
              numericKeyboard.displayValue();
              break;
            case 3:
              basicActions.displayAction();
              break;
            case 4:
              bookmark.displayAction();
              break;
            default:
              break;
          }
          deleteLastEnteredText(); 
          switchKeyboards();
        }

        function deleteLastEnteredText(){
          //If the array contains swipe left then remove the last letter
          if(selectedActions.length == fingerMoves[0]){
             if(selectedActions[0] != null && typeof (selectedActions[0]) !=='undefined'){
               if(selectedActions[0].type == swipeLeftString){
                  wordArray.splice(wordArray.length - 1, 1)
                  feedback.playVoiceMessage(1);
                  basicActions.displayText();
                  return;
               }
             }
          }

          if(hasAValue == false){
            //If the array doesn't contain a matching letter then play voice sorry i didn't get you
            feedback.playVoiceMessage(0);    
          }

          hasAValue = false;
        }
    }
    
};
