var docName = '';
var firename;
var responses;
var deadline;
var goal;
var lastresp;
var divTop = 30;
var queryRef;
console.log('latch');

// const fireDiv = document.createElement('fire-div');
// fireDiv.setAttribute("firename", "COVID-19 Conferencing Solution Survey");
// fireDiv.setAttribute("responses", "246");
// fireDiv.setAttribute("deadline", "Jan 31, 2021");
// fireDiv.setAttribute("goal", "500");
// fireDiv.setAttribute("lastresp", "10:34 am");
// document.body.appendChild(fireDiv);



function updateFirebase(){
  var firenameInput = document.getElementById("firenameInput").value;
  console.log(firenameInput);
  var responsesInput = document.getElementById("responsesInput").value;
  var goalInput = document.getElementById("goalInput").value;
  var deadlineInput = document.getElementById("deadlineInput").value;
  var lastrespInput = document.getElementById("lastrespInput").value;

  var docRef = db.collection("fires").add({
                      firename: firenameInput,
                      responses: responsesInput,
                      goal: goalInput,
                      deadline: deadlineInput,
                      lastresp: lastrespInput
                    });
                  }
                      

// function fetchData(){
//   var firename;
  var template = document.createElement('template');
template.innerHTML = `
    <style>
    /* The switch - the box around the slider */
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    
    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    input:checked + .slider {
      background-color: #702DFF;
    }
    
    input:focus + .slider {
      box-shadow: 0 0 1px #702DFF;
    }
    
    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    
    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }
    
    .slider.round:before {
      border-radius: 50%;
    }

    .switchC{
      position: absolute;
      left: 3.97%;
      top: 28.9%;
    }

    .fireName{
      position: absolute;
      left: 14.05%;
      top: 20.59%;


      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;


      color: #000634;

    }
    .responses{
      position: absolute;
      left: 46.61%;
      top: 6.6%;

      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 17px
      color: #000634;
    }

    .goal{
      position: absolute;
      left: 68.9%;
      right: 28.49%;
      top: 5%;
      bottom: 35.59%;

      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 17px;
      /* identical to box height */


      color: #000634;

    }

    .deadline{
      position: absolute;
      left: 76.39%;
      right: 13.02%;
      top: 23.73%;
      bottom: 25.42%;

      background: #702DFF;
      border-radius: 4px;
    }

    .deadlineN{
      position: absolute;
      top: -60%;
      left: 11.5%;
      font-size: 14px;
      color: white;
      font-family: Inter;
      font-weight: normal;
    }
    .lastresp{
      position: absolute;
      left: 89.73%;
      top: 35.59%;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;


      color: #000634;
    }

      .line{
        position: absolute;
        bottom: 0%;
        width: 99%;
        left:0.5%;
        height: 1px;
        background: #E5E5E5;
      }

    .progress{
      position: absolute;
      width: 9%;
      height: 10px;
      border-radius: 10px;
      background: rgba(185, 192, 201, 0.4);
      top: 45%;
      left: 55%;
    }


    
    </style>
    <div class='fire'>
      <div class="switchC">
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
      </div>
          <h3 class="fireName"></h3>
        <h4 class="responses"></h4>
        <h5 class="goal"></h5>
        <div class="deadline">
        <h6 class="deadlineN" ></h6>
        </div>
        <div class="lastresp">
        <h7></h7>
        </div>
        <div class="progress"></div>
        <div class="line"></div>
        <p><slot name="email"/></p>
        <p><slot name="password"/></p>
    </div>
        <button>

`;


// var docRef2 = db.collection("fires")
//       .get()
//       .then(function(querySnapshot) {
//         if (querySnapshot.empty){
//           noResults();
//         } else {
//           querySnapshot.forEach(function(doc) {
//             queryRef = doc.data();
//             firename = queryRef.firename;
//             responses = queryRef.responses;
//             deadline = queryRef.deadline;
//             goal = queryRef.goal;
//             lastresp = queryRef.lastresp;

//             divTop = divTop + 10;


//             var fireP = String(divTop) + "%";
//             const fireDiv = document.createElement('fire-div');

//             fireDiv.setAttribute('firename', firename);
//             fireDiv.setAttribute("responses", responses);
//             fireDiv.setAttribute("deadline", deadline);
//             fireDiv.setAttribute("goal", goal);
//             fireDiv.setAttribute("lastresp", lastresp);
 
//             fireDiv.style.position = "absolute";
//             fireDiv.style.top = fireP;
//             fireDiv.style.left = "20%";
//             fireDiv.style.height = "75px";
//             fireDiv.style.width = "1032px";

//             document.body.appendChild(fireDiv);
//     console.log(doc.id, " => ", doc.data())

//     });
//         }
// })
// .catch(function(error) {
// console.log("Error getting documents: ", error);
// });

class Fire extends HTMLElement{
  constructor(){
      super();
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector('h3').innerText = 
<<<<<<< Updated upstream
      this.getAttribute('firename');
=======
      this.getAttribute("firename");
>>>>>>> Stashed changes
      this.shadowRoot.querySelector('h4').innerText = 
      this.getAttribute('responses');
      this.shadowRoot.querySelector('h5').innerText = this.getAttribute('goal');
      this.shadowRoot.querySelector('h6').innerText = 
      this.getAttribute('deadline');
      this.shadowRoot.querySelector('h7').innerText = 
      this.getAttribute('lastresp');


  }
}
window.customElements.define('fire-div', Fire);



function fetchData(){
  var docRef2 = db.collection("fires")
      .get()
      .then(function(querySnapshot) {
        if (querySnapshot.empty){
          noResults();
        } else {
          querySnapshot.forEach(function(doc) {
            queryRef = doc.data();
            firename = queryRef.firename;
            responses = queryRef.responses;
            deadline = queryRef.deadline;
            goal = queryRef.goal;
            lastresp = queryRef.lastresp;

            divTop = divTop + 10;


            var fireP = String(divTop) + "%";
            const fireDiv = document.getElementById('first');
            var email = document.getElementById('email') 
            email = firename;

            fireDiv.firename = "latch";
            fireDiv.setAttribute("firename", firename);
            fireDiv.setAttribute("responses", responses);
            fireDiv.setAttribute("deadline", deadline);
            fireDiv.setAttribute("goal", goal);
            fireDiv.setAttribute("lastresp", lastresp);
 
            fireDiv.style.position = "absolute";
            fireDiv.style.top = fireP;
            fireDiv.style.left = "20%";
            fireDiv.style.height = "75px";
            fireDiv.style.width = "1032px";
            fireDiv.style.display = "block";

            document.body.appendChild(fireDiv);
    console.log(doc.id, " => ", doc.data())

    });
        }
})
.catch(function(error) {
console.log("Error getting documents: ", error);
});
}
function logout() {
  document.getElementById("logout").style.display = "block";
}