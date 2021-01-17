var wideCard = document.getElementById('widescreenCard');
    var wSImg = document.getElementById('widescreenImg');
    var eH = document.getElementById("eightHundred");
    var wS = document.getElementById('widescreen');
var sCard = document.getElementById('squareCard');
var fH = document.getElementById("fourHundred");
var sqImg = document.getElementById("squareImg");
var sq = document.getElementById("square");
var vC = document.getElementById("voiceCard");
var voImg = document.getElementById("voiceImg");
var vo = document.getElementById("voice");
var nlp = document.getElementById("nlp");

var tech = document.getElementById("tech");
var techTxt = document.getElementById("techTxt");
var business = document.getElementById("business");
var businessTxt = document.getElementById("businessTxt");
var foodEnt = document.getElementById("foodEnt");
var foodEntTxt = document.getElementById("foodEntTxt");
var health = document.getElementById("health");
var healthTxt = document.getElementById("healthTxt");
var sport = document.getElementById("sport");
var sportTxt = document.getElementById("sportTxt");
var education = document.getElementById("education");
var educationTxt = document.getElementById("eduTxt");



function copyFunc(){
    var authId = document.getElementById('ID');
    authId.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  var alertCopy = document.getElementById("alertCopy");
  alertCopy.style.display = "block";
  alertCopy.innerHTML = "Copied: " + authId.value;
  var alertText = document.getElementsByClassName('alertText');
  alertText.style.font_size = "6px";
}


function wideScreen(){
    wideCard.style.background = '#EE3C15';
    wSImg.style.color = 'white';
    eH.style.color = "white";
    wS.style.color = "white";

    sCard.style.background = "rgba(112, 45, 255, 0.1)";
    fH.style.color = "#702DFF";
    sqImg.style.color = "#702DFF";
    sq.style.color = "#702DFF";

    vC.style.background =  "rgba(0, 24, 217, 0.1)";
    voImg.setAttribute('src', "/interior/settings/voiceImg.svg");
    vo.style.color = "#0017CD";
    nlp.style.color = "#0017CD";

}

function squareCard(){
    wideCard.style.background = 'rgba(238, 60, 21, 0.1)';
    wSImg.style.color = '#EE3C15';
    eH.style.color = "#EE3C15";
    wS.style.color = "#EE3C15";

    sCard.style.background = "#702DFF";
    fH.style.color = "white";
    sqImg.style.color = "white";
    sq.style.color = "white";

    vC.style.background =  "rgba(0, 24, 217, 0.1)";
    voImg.setAttribute('src', "/interior/settings/voiceImg.svg");
    vo.style.color = "#0017CD";
    nlp.style.color = "#0017CD";
}

function voiceCard(){
    wideCard.style.background = 'rgba(238, 60, 21, 0.1)';
    wSImg.style.color = '#EE3C15';
    eH.style.color = "#EE3C15";
    wS.style.color = "#EE3C15";

    sCard.style.background = "rgba(112, 45, 255, 0.1)";
    fH.style.color = "#702DFF";
    sqImg.style.color = "#702DFF";
    sq.style.color = "#702DFF";

    vC.style.background =  "#0017CD";
    voImg.setAttribute('src', "/interior/settings/voiceImg2.svg");
    vo.style.color = "white";
    nlp.style.color = "white";
}

function techFunc(){
    tech.style.background =  "#EE3C15";
    techTxt.style.color = "white";

    business.style.background = "rgba(112, 45, 255, 0.1)";
    businessTxt.style.color = "#6f2dffa4";
    
    foodEnt.style.background = "rgba(65, 211, 160, 0.397)";
    foodEntTxt.style.color = "#41D39F"

    health.style.background = "rgba(21, 198, 238, 0.315)";
    healthTxt.style.color = "#15C7EE";

    sport.style.background = "rgba(0, 25, 217, 0.24)";
    sportTxt.style.color = "#0017CD";

    education.style.background = "rgba(238, 164, 21, 0.1)";
    educationTxt.style.color = "#EEA415";
}

function businessFunc(){
    tech.style.background = "rgba(238, 60, 21, 0.1)";
    techTxt.style.color = "#EE3C15";

    business.style.background = "#41D39F";
    businessTxt.style.color = "white";

    foodEnt.style.background = "rgba(65, 211, 160, 0.397)";
    foodEntTxt.style.color = "#41D39F"

    health.style.background = "rgba(21, 198, 238, 0.315)";
    healthTxt.style.color = "#15C7EE";

    sport.style.background = "rgba(0, 25, 217, 0.24)";
    sportTxt.style.color = "#0017CD";

    education.style.background = "rgba(238, 164, 21, 0.1)";
    educationTxt.style.color = "#EEA415";
}

function foodEntFunc(){
    tech.style.background = "rgba(238, 60, 21, 0.1)";
    techTxt.style.color = "#EE3C15";

    business.style.background = "rgba(112, 45, 255, 0.1)";
    businessTxt.style.color = "#6f2dffa4";
    
    foodEnt.style.background = "#41D39F";
    foodEntTxt.style.color = "white"

    health.style.background = "rgba(21, 198, 238, 0.315)";
    healthTxt.style.color = "#15C7EE";

    sport.style.background = "rgba(0, 25, 217, 0.24)";
    sportTxt.style.color= "#0017CD";

    education.style.background = "rgba(238, 164, 21, 0.1)";
    educationTxt.style.color = "#EEA415";
}

function healthFunc(){
    tech.style.background = "rgba(238, 60, 21, 0.1)";
    techTxt.style.color = "#EE3C15";

    business.style.background = "rgba(112, 45, 255, 0.1)";
    businessTxt.style.color = "#6f2dffa4";
    
    foodEnt.style.background = "rgba(65, 211, 160, 0.397)";
    foodEntTxt.style.color = "#41D39F"

    health.style.background = "#15C7EE";
    healthTxt.style.color = "white";

    sport.style.background = "rgba(0, 25, 217, 0.24)";
    sportTxt.style.color = "#0017CD";

    education.style.background = "rgba(238, 164, 21, 0.1)";
    educationTxt.style.color= "#EEA415";
}

function sportFunc(){
    tech.style.background = "rgba(238, 60, 21, 0.1)";
    techTxt.style.color = "#EE3C15";

    business.style.background = "rgba(112, 45, 255, 0.1)";
    businessTxt.style.color = "#6f2dffa4";
    
    foodEnt.style.background = "rgba(65, 211, 160, 0.397)";
    foodEntTxt.style.color = "#41D39F"

    health.style.background = "rgba(21, 198, 238, 0.315)";
    healthTxt.style.color = "#15C7EE";

    sport.style.background = "#0017CD";
    sportTxt.style.color = "white";

    education.style.background = "rgba(238, 164, 21, 0.1)";
    educationTxt.style.color = "#EEA415";
}

function educationFunc(){
    tech.style.background = "rgba(238, 60, 21, 0.1)";
    techTxt.style.color = "#EE3C15";

    business.style.background = "rgba(112, 45, 255, 0.1)";
    businessTxt.style.color = "#6f2dffa4";
    
    foodEnt.style.background = "rgba(65, 211, 160, 0.397)";
    foodEntTxt.style.color = "#41D39F"

    health.style.background = "rgba(21, 198, 238, 0.315)";
    healthTxt.style.color = "#15C7EE";

    sport.style.background = "rgba(0, 25, 217, 0.24)";
    sportTxt.style.color = "#0017CD";

    education.style.background = "#EEA415";
    educationTxt.style.color = "white";
}