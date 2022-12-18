var video = document.getElementById("playVideo");

// Get the button
var btn = document.getElementById("homePageBtn");

// Pause and play the video, and change the button text
function pauseVideo() {
  if (btn.innerHTML == "Play") {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

/* page2 */
function changeImage1(){
  document.getElementById("img1").hidden = true;
  document.getElementById("txt1").hidden = false;
}
function changeTxt1(){
  document.getElementById("img1").hidden = false;
  document.getElementById("txt1").hidden = true;
}
function changeImage2(){
  document.getElementById("img2").hidden = true;
  document.getElementById("txt2").hidden = false;
}
function changeTxt2(){
  document.getElementById("img2").hidden = false;
  document.getElementById("txt2").hidden = true;
}
function changeImage3(){
  document.getElementById("img3").hidden = true;
  document.getElementById("txt3").hidden = false;
}
function changeTxt3(){
  document.getElementById("img3").hidden = false;
  document.getElementById("txt3").hidden = true;
}
function changeImage4(){
  document.getElementById("img4").hidden = true;
  document.getElementById("txt4").hidden = false;
}
function changeTxt4(){
  document.getElementById("img4").hidden = false;
  document.getElementById("txt4").hidden = true;
}

/* page2 */
function validate(){
  //set valid to true - flag
  var valid = true;
  var msge = "Incomplete Form, "; //set up the message

  //if statements to check data and set the message
  if(document.getElementById("fn").value == ""){
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
  if(!valid){  //!valid means not true. Same as valid == false
    document.getElementById("msge1").innerHTML = msge;
    document.getElementById("msge1").style.color = "red";
    document.getElementById("msge1").style.fontSize = "x-large";
  } else if (valid) {
    change();
  }
  return valid;
}
function change() { /* It hides the Div and shows the other div */
  var x = document.getElementById("main");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("unhidden").innerHTML="Thank you for the submit!" /* It shows this div and hides the rest */
}

/* page3 */
$(document).ready(function(){

  $("#btn").click(function(){

    //takes into account all the radio buttons under the name "Number"
    var checkedValue = $('input:radio[name="Number"]:checked').val();

    //if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      //"You didn't click an answer" will be displayed in h3 tag
      $("#correctOrIn").text("You didn't click an answer");
    //if value checked is equal to 1
    }else if (checkedValue == "1"){
        //"Correct Answer" will be displayed in h3 tag
        $("#correctOrIn").text("Correct Answer");
        //div will hide
        $("#answerOne").hide();
        //button will hide
        $("#btn").hide();
      } else {
        //"Incorrect Answer" will be displayed in h3 tag
        $("#correctOrIn").text("Incorrect Answer");
        //div will hide
        $("#answerOne").hide();
        //button will hide
        $("#btn").hide();
      }
  });

  $("#btnTwo").click(function(){

    //takes into account all the radio buttons under the name "NumberTwo"
    var checkedValue = $('input:radio[name="NumberTwo"]:checked').val();


    //if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      //"You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInTwo").text("You didn't click an answer");
    //if value checked is equal to 1
    }else if (checkedValue == "1"){
        //"Correct Answer" will be displayed in h3 tag
        $("#correctOrInTwo").text("Correct Answer");
        //div will hide
        $("#answerTwo").hide();
        //button will hide
        $("#btnTwo").hide();
      } else {
        //"Inorrect Answer" will be displayed in h3 tag
        $("#correctOrInTwo").text("Incorrect Answer");
        //div will hide
        $("#answerTwo").hide();
        //button will hide
        $("#btnTwo").hide();
      }
  });

  $("#btnThree").click(function(){

    //takes into account all the radio buttons under the name "NumberThree"
    var checkedValue = $('input:radio[name="NumberThree"]:checked').val();

    //if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      //"You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInThree").text("You didn't click an answer");
      //if value checked is equal to 1
    }else if (checkedValue == "1"){
        //*Correct Answer" will be displayed in h3 tag
        $("#correctOrInThree").text("Correct Answer");
        //div will hide
        $("#answerThree").hide();
        //button will hide
        $("#btnThree").hide();
      } else {
        //*Correct Answer" will be displayed in h3 tag
        $("#correctOrInThree").text("Incorrect Answer");
        //div will hide
        $("#answerThree").hide();
        //button will hide
        $("#btnThree").hide();
      }
  });

  $("#btnFour").click(function(){

    //takes into account all the radio buttons under the name "NumberFour"
    var checkedValue = $('input:radio[name="NumberFour"]:checked').val();

    //if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      //"You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInFour").text("You didn't click an answer");
    //if value checked is equal to 1
    }else if (checkedValue == "1"){
        //"Correct Answer" will be displayed in h3 tag
        $("#correctOrInFour").text("Correct Answer");
        //div will hide
        $("#answerFour").hide();
        //button will hide
        $("#btnFour").hide();
      } else {
        //"Incorrect Answer" will be displayed in h3 tag
        $("#correctOrInFour").text("Incorrect Answer");
        //div will hide
        $("#answerFour").hide();
        //button will hide
        $("#btnFour").hide();
      }
  });

  $("#btnFive").click(function(){

    //takes into account all the radio buttons under the name "NumberFive"
    var checkedValue = $('input:radio[name="NumberFive"]:checked').val();

    //if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      //"You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInFive").text("You didn't click an answer");
    //if value checked is equal to 1
    }else if (checkedValue == "1"){
        //"Correct Answer" will be displayed in h3 tag
        $("#correctOrInFive").text("Correct Answer");
        //div will hide
        $("#answerFive").hide();
        //button will hide
        $("#btnFive").hide();
      } else {
        //"Inorrect Answer" will be displayed in h3 tag
        $("#correctOrInFive").text("Incorrect Answer");
        //div will hide
        $("#answerFive").hide();
        //button will hide
        $("#btnFive").hide();
      }
  });

  $("#btnSix").click(function(){

    //takes into account all the radio buttons under the name "NumberSix"
    var checkedValue = $('input:radio[name="NumberSix"]:checked').val();

    //if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      //"You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInSix").text("You didn't click an answer");
    //if value checked is equal to 1
    }else if (checkedValue == "1"){
        //"Correct Answer" will be displayed in h3 tag
        $("#correctOrInSix").text("Correct Answer");
        //div will hide
        $("#answerSix").hide();
        //button will hide
        $("#btnSix").hide();
      } else {
        //"Inorrect Answer" will be displayed in h3 tag
        $("#correctOrInSix").text("Incorrect Answer");
        //div will hide
        $("#answerSix").hide();
        //button will hide
        $("#btnSix").hide();
      }
  });

  $("#btnSeven").click(function(){

    //takes into account all the radio buttons under the name "NumberSeven"
    var checkedValue = $('input:radio[name="NumberSeven"]:checked').val();

    //if values checked do not equal to 0 or 1
    if (checkedValue != "0" && checkedValue != "1"){
      //"You didn't click an answer" will be displayed in h3 tag
      $("#correctOrInSeven").text("You didn't click an answer");
    //if value checked is equal to 1
    }else if (checkedValue == "1"){
        //"Correct Answer" will be displayed in h3 tag
        $("#correctOrInSeven").text("Correct Answer");
        //div will hide
        $("#answerSeven").hide();
        //button will hide
        $("#btnSeven").hide();
      } else {
        //"Inorrect Answer" will be displayed in h3 tag
        $("#correctOrInSeven").text("Incorrect Answer");
        //div will hide
        $("#answerSeven").hide();
        //button will hide
        $("#btnSeven").hide();
      }
  });

        $("#buttonGame").click(function(){
    //Math.floor will generate a random number 1 to 6 in integer
    var iPlayerNumber = Math.floor(Math.random()*6+1);
    var iCompNumber = Math.floor(Math.random()*6+1);

    //image tag will be replaved with an image corresponding with the random generated number
    $("#imgPlayer").attr("src", "./images/" + iPlayerNumber + ".png")
    $("#imgCompNumber").attr("src", "./images/" + iCompNumber + ".png")

    //if player number is greater than computer number
    if (iPlayerNumber > iCompNumber){
      //h1 tag will be replaced with the following comment
      $("#message").text("You Win! Let's see if you'll win again the next round...");
      //removeAttr taken from https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
      //disabled button will become enabled
      $('#buttonGame2').removeAttr('disabled');
      $('#buttonGame').attr('disabled','disabled');
    //of player number is less than computer number
    }else if(iPlayerNumber < iCompNumber){
      //h1 tag wull be replaced by the following comment
      $("#message").text("Computer Wins! Let's see if you'll be able to win the next round...");
      //removeAttr taken from https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
      //disabled button will become enabled
      $('#buttonGame2').removeAttr('disabled');
      $('#buttonGame').attr('disabled','disabled');
    //if player number is eaual to computer number
    }else{
      //h1 tag will be replaced by the following comment
      $("#message").text("Draw!");
      //removeAttr taken from https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
      //disabled button will become enabled
      $('#buttonGame2').removeAttr('disabled');
      $('#buttonGame').attr('disabled','disabled');
    }

  $("#buttonGame2").click(function(){
    //Math.floor will generate a random number 1 to 6 in integer
    var iPlayerNumber2 = Math.floor(Math.random()*6+1);
    var iCompNumber2 = Math.floor(Math.random()*6+1);

    //first number from first part of the game plus the second number generated
    var iPlayerNumberR = parseInt(iPlayerNumber + iPlayerNumber2)
    //first number from first part of the game plus the second number generated
    var iCompNumberR = parseInt(iCompNumber + iCompNumber2)

    //image tag will be replaved with an image corresponding with the random generated number
    $("#imgPlayer2").attr("src", "./images/" + iPlayerNumber2 + ".png")
    $("#imgCompNumber2").attr("src", "./images/" + iCompNumber2 + ".png")

    //if player number is greater than computer number
    if (iPlayerNumberR > iCompNumberR){
      //h1 tag will display following comment
      $("#message").text("You Win the Second Round! Well done!");
      //button will become disabled
      $('#buttonGame2').attr('disabled','disabled');
    //if player number is less than computer number
    }else if(iPlayerNumberR < iCompNumberR){
      //h1 tag will display following comment
      $("#message").text("Computer Wins the Second Round! Tough Luck!");
      //button will become disabled
      $('#buttonGame2').attr('disabled','disabled');
    //if player number is equal to computer number
    }else{
      //h1 tag will display following comment
      $("#message").text("Draw!");
      //button will become disabled
      $('#buttonGame2').attr('disabled','disabled');
    }
  });
});
  $("#buttonReset").click(function(){

    //image tag will be replaved with an image corresponding with the random generated number
    $("#imgPlayer").attr("src", "./images/0.png");
    $("#imgCompNumber").attr("src", "./images/0.png");

    //image tag will be replaved with an image corresponding with the random generated number
    $("#imgPlayer2").attr("src", "./images/0.png");
    $("#imgCompNumber2").attr("src", "./images/0.png");

    //h1 tag will display no message
    $("#message").text("");
    //button becomes enabled
    $('#buttonGame').removeAttr('disabled');
    //button becomes disabled
    $('#buttonGame2').attr('disabled','disabled');

  });
});
