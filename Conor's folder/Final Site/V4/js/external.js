var video = document.getElementById("playVideo");
// SB-  Get the value of the video
var btn = document.getElementById("homePageBtn");
// SB- Get the value of the button
function pauseVideo() {
  // SB- Pause and play the video, and changes the button text
  if (btn.innerHTML == "Play") {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
// page1
function changeImage1(){
  document.getElementById("img1").hidden = true;
  // CJ- image when clicked will cause image to dissapear
  document.getElementById("txt1").hidden = false;
  // CJ- image when clicked will cause text to appear
}
function changeTxt1(){
  document.getElementById("img1").hidden = false;
  // CJ- text when clicked will cause image to appear
  document.getElementById("txt1").hidden = true;
  // CJ- text when clicked will cause text to dissapear
}
function changeImage2(){
  document.getElementById("img2").hidden = true;
  // CJ- image when clicked will cause image to dissapear
  document.getElementById("txt2").hidden = false;
  // CJ- image when clicked will cause text to appear
}
function changeTxt2(){
  document.getElementById("img2").hidden = false;
  // CJ- text when clicked will cause image to appear
  document.getElementById("txt2").hidden = true;
  // CJ- text when clicked will cause text to dissapear
}
function changeImage3(){
  document.getElementById("img3").hidden = true;
  // CJ- image when clicked will cause image to dissapear
  document.getElementById("txt3").hidden = false;
  // CJ- image when clicked will cause text to appear
}
function changeTxt3(){
  document.getElementById("img3").hidden = false;
  // CJ- text when clicked will cause image to appear
  document.getElementById("txt3").hidden = true;
  // CJ- text when clicked will cause text to dissapear
}
function changeImage4(){
  document.getElementById("img4").hidden = true;
  // CJ- image when clicked will cause image to dissapear
  document.getElementById("txt4").hidden = false;
  // CJ- image when clicked will cause text to appear
}
function changeTxt4(){
  document.getElementById("img4").hidden = false;
  // CJ- text when clicked will cause image to appear
  document.getElementById("txt4").hidden = true;
  // CJ- text when clicked will cause text to dissapear}
}
// page2
function validate(){
  // FZ- set valid to true - flag
  var valid = true;
  var msge = "Incomplete Form, ";
  // FZ- set up the message
  if(document.getElementById("fn").value == ""){
    // FZ- if statements to check data and set the message
    msge += "You need to fill in the First Name. ";
    valid = false;
  }
  if(document.getElementById("sn").value == ""){
    msge += "You need to fill in the Second Name. ";
    valid = false;
  }
  if(document.getElementById("tel").value == 0){
    msge += "You need to fill in the Telephone. ";
    valid = false;
  }
  if ((document.getElementById("r-ind").checked == false) && (document.getElementById("r-com").checked == false ) ) {
    msge += "You need to check one of the boxes. ";
    valid = false;
  }
  if(!valid){
    // FZ- !valid means not true. Same as valid == false
    document.getElementById("msge1").innerHTML = msge;
    document.getElementById("msge1").style.color = "red";
    document.getElementById("msge1").style.fontSize = "x-large";
  } else if (valid) {
    change();
  }
  return valid;
}
function change() {
  // FZ- It hides the Div and shows the other div
  var x = document.getElementById("main");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("unhidden").innerHTML="Thank you for your interest. We will get back to you as soon as possible"
}

/* page3 */
$(document).ready(function(){
  $("#btn").click(function(){
    //PP- takes into account all the radio buttons under the name "Number"
    var checkedValue = $('input:radio[name="Number"]:checked').val();
    // PP- if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      // PP- "You didn't click an answer" will be displayed in h3 tag
      $("#correctOrIn").text("You didn't click an answer");
      // PP- if value checked is equal to 1
    }else if (checkedValue == "1"){
      // PP- "Correct Answer" will be displayed in h3 tag
      $("#correctOrIn").text("Correct Answer");
      // PP- div will hide
      $("#answerOne").hide();
      // PP- button will hide
      $("#btn").hide();
    } else {
      // PP- "Incorrect Answer" will be displayed in h3 tag
      $("#correctOrIn").text("Incorrect Answer");
      // PP- div will hide
      $("#answerOne").hide();
      // PP- button will hide
      $("#btn").hide();
    }
  });

  $("#btnTwo").click(function(){
    // PP- takes into account all the radio buttons under the name "NumberTwo"
    var checkedValue = $('input:radio[name="NumberTwo"]:checked').val();
    // PP- if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      // PP- "You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInTwo").text("You didn't click an answer");
      // PP- if value checked is equal to 1
    }else if (checkedValue == "1"){
      // PP- "Correct Answer" will be displayed in h3 tag
      $("#correctOrInTwo").text("Correct Answer");
      // PP- div will hide
      $("#answerTwo").hide();
      // PP- button will hide
      $("#btnTwo").hide();
    } else {
      // PP- "Inorrect Answer" will be displayed in h3 tag
      $("#correctOrInTwo").text("Incorrect Answer");
      // PP- div will hide
      $("#answerTwo").hide();
      // PP- button will hide
      $("#btnTwo").hide();
    }
  });

  $("#btnThree").click(function(){
    // PP- takes into account all the radio buttons under the name "NumberThree"
    var checkedValue = $('input:radio[name="NumberThree"]:checked').val();
    // PP- if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      // PP- "You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInThree").text("You didn't click an answer");
      // PP- if value checked is equal to 1
    }else if (checkedValue == "1"){
      // PP- *Correct Answer" will be displayed in h3 tag
      $("#correctOrInThree").text("Correct Answer");
      // PP- div will hide
      $("#answerThree").hide();
      // PP- button will hide
      $("#btnThree").hide();
    } else {
      // PP- *Correct Answer" will be displayed in h3 tag
      $("#correctOrInThree").text("Incorrect Answer");
      // PP- div will hide
      $("#answerThree").hide();
      // PP- button will hide
      $("#btnThree").hide();
    }
  });

  $("#btnFour").click(function(){
    // PP- takes into account all the radio buttons under the name "NumberFour"
    var checkedValue = $('input:radio[name="NumberFour"]:checked').val();
    // PP- if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      // PP- "You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInFour").text("You didn't click an answer");
      // PP- if value checked is equal to 1
    }else if (checkedValue == "1"){
      // PP- "Correct Answer" will be displayed in h3 tag
      $("#correctOrInFour").text("Correct Answer");
      // PP- div will hide
      $("#answerFour").hide();
      // PP- button will hide
      $("#btnFour").hide();
    } else {
      // PP- "Incorrect Answer" will be displayed in h3 tag
      $("#correctOrInFour").text("Incorrect Answer");
      // PP- div will hide
      $("#answerFour").hide();
      // PP- button will hide
      $("#btnFour").hide();
    }
  });

  $("#btnFive").click(function(){
    // PP- takes into account all the radio buttons under the name "NumberFive"
    var checkedValue = $('input:radio[name="NumberFive"]:checked').val();
    // PP- if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      // PP- "You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInFive").text("You didn't click an answer");
      // PP- if value checked is equal to 1
    }else if (checkedValue == "1"){
      // PP- "Correct Answer" will be displayed in h3 tag
      $("#correctOrInFive").text("Correct Answer");
      // PP- div will hide
      $("#answerFive").hide();
      // PP- button will hide
      $("#btnFive").hide();
    } else {
      // PP- "Inorrect Answer" will be displayed in h3 tag
      $("#correctOrInFive").text("Incorrect Answer");
      // PP- div will hide
      $("#answerFive").hide();
      // PP- button will hide
      $("#btnFive").hide();
    }
  });
  $("#btnSix").click(function(){
    // PP- takes into account all the radio buttons under the name "NumberSix"
    var checkedValue = $('input:radio[name="NumberSix"]:checked').val();
    // PP- if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      // PP- "You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInSix").text("You didn't click an answer");
      // PP- if value checked is equal to 1
    }else if (checkedValue == "1"){
      // PP- "Correct Answer" will be displayed in h3 tag
      $("#correctOrInSix").text("Correct Answer");
      // PP- div will hide
      $("#answerSix").hide();
      // PP- button will hide
      $("#btnSix").hide();
    } else {
      // PP- "Inorrect Answer" will be displayed in h3 tag
      $("#correctOrInSix").text("Incorrect Answer");
      // PP- div will hide
      $("#answerSix").hide();
      // PP- button will hide
      $("#btnSix").hide();
    }
  });
  $("#btnSeven").click(function(){
    // PP- takes into account all the radio buttons under the name "NumberSeven"
    var checkedValue = $('input:radio[name="NumberSeven"]:checked').val();
    // PP- if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      // PP- "You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInSeven").text("You didn't click an answer");
      // PP- if value checked is equal to 1
    }else if (checkedValue == "1"){
      // PP- "Correct Answer" will be displayed in h3 tag
      $("#correctOrInSeven").text("Correct Answer");
      // PP- div will hide
      $("#answerSeven").hide();
      // PP- button will hide
      $("#btnSeven").hide();
    } else {
      // PP- "Inorrect Answer" will be displayed in h3 tag
      $("#correctOrInSeven").text("Incorrect Answer");
      // PP- div will hide
      $("#answerSeven").hide();
      // PP- button will hide
      $("#btnSeven").hide();
    }
  });
  $("#buttonGame").click(function(){
    // PP- Math.floor will generate a random number 1 to 6 in integer
    var iPlayerNumber = Math.floor(Math.random()*6+1);
    var iCompNumber = Math.floor(Math.random()*6+1);
    // PP- image tag will be replaved with an image corresponding with the random generated number
    $("#imgPlayer").attr("src", "./images/" + iPlayerNumber + ".png")
    // PP- taken from https://pixabay.com/vectors/dice-games-game-six-sided-face-26772/
    $("#imgCompNumber").attr("src", "./images/" + iCompNumber + ".png")
    // PP- taken from https://pixabay.com/vectors/dice-games-game-six-sided-face-26772/
    // PP- if player number is greater than computer number
    if (iPlayerNumber > iCompNumber){
      // PP- h1 tag will be replaced with the following comment
      $("#message").text("You Win! Let's see if you'll win again the next round...");
      // PP- removeAttr taken from https:// P.P stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
      // PP- disabled button will become enabled
      $('#buttonGame2').removeAttr('disabled');
      $('#buttonGame').attr('disabled','disabled');
      // PP- of player number is less than computer number
    }else if(iPlayerNumber < iCompNumber){
      // PP- h1 tag wull be replaced by the following comment
      $("#message").text("Computer Wins! Let's see if you'll be able to win the next round...");
      // PP- removeAttr taken from https:// P.P stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
      // PP- disabled button will become enabled
      $('#buttonGame2').removeAttr('disabled');
      $('#buttonGame').attr('disabled','disabled');
      // PP- if player number is eaual to computer number
    }else{
      // PP- h1 tag will be replaced by the following comment
      $("#message").text("Draw!");
      // PP- removeAttr taken from https:// P.P stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
      $('#buttonGame2').removeAttr('disabled');
      // PP- disabled button will become enabled
      $('#buttonGame').attr('disabled','disabled');
    }
    $("#buttonGame2").click(function(){
      // PP- Math.floor will generate a random number 1 to 6 in integer
      var iPlayerNumber2 = Math.floor(Math.random()*6+1);
      var iCompNumber2 = Math.floor(Math.random()*6+1);
      // PP- first number from first part of the game plus the second number generated
      var iPlayerNumberR = parseInt(iPlayerNumber + iPlayerNumber2)
      // PP- first number from first part of the game plus the second number generated
      var iCompNumberR = parseInt(iCompNumber + iCompNumber2)
      // PP- image tag will be replaved with an image corresponding with the random generated number
      $("#imgPlayer2").attr("src", "./images/" + iPlayerNumber2 + ".png")
      // PP- taken from https://pixabay.com/vectors/dice-games-game-six-sided-face-26772/
      $("#imgCompNumber2").attr("src", "./images/" + iCompNumber2 + ".png")
      // PP- taken from https://pixabay.com/vectors/dice-games-game-six-sided-face-26772/
      // PP- if player number is greater than computer number
      if (iPlayerNumberR > iCompNumberR){
        // PP- h1 tag will display following comment
        $("#message").text("You Win the Second Round! Well done!");
        // PP- button will become disabled
        $('#buttonGame2').attr('disabled','disabled');
        // PP- if player number is less than computer number
      }else if(iPlayerNumberR < iCompNumberR){
        // PP- h1 tag will display following comment
        $("#message").text("Computer Wins the Second Round! Tough Luck!");
        // PP- button will become disabled
        $('#buttonGame2').attr('disabled','disabled');
        // PP- if player number is equal to computer number
      }else{
        // PP- h1 tag will display following comment
        $("#message").text("Draw!");
        // PP- button will become disabled
        $('#buttonGame2').attr('disabled','disabled');
      }
    });
  });
  $("#buttonReset").click(function(){
    // PP- image tag will be replaved with an image corresponding with the random generated number
    $("#imgPlayer").attr("src", "./images/0.png");
    // PP- taken from https://pixabay.com/vectors/dice-games-game-six-sided-face-26772/
    $("#imgCompNumber").attr("src", "./images/0.png");
    // PP- taken from https://pixabay.com/vectors/dice-games-game-six-sided-face-26772/
    // PP- image tag will be replaved with an image corresponding with the random generated number
    $("#imgPlayer2").attr("src", "./images/0.png");
    // PP- taken from https://pixabay.com/vectors/dice-games-game-six-sided-face-26772/
    $("#imgCompNumber2").attr("src", "./images/0.png");
    // PP- taken from https://pixabay.com/vectors/dice-games-game-six-sided-face-26772/
    // PP- h1 tag will "Good Luck!"
    $("#message").text("Good Luck!");
    // PP- button becomes enabled
    $('#buttonGame').removeAttr('disabled');
    // PP- button becomes disabled
    $('#buttonGame2').attr('disabled','disabled');
  });
});
