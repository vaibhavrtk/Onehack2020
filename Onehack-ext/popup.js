document.addEventListener('DOMContentLoaded', documentEvents  , false);

function documentEvents() {    
  document.getElementById('ok_btn').addEventListener('click', 
    function() {  
  var sessionId = document.getElementById('session_id').value;
  var token = document.getElementById('token').value;
  click();
  });

  // you can add listeners for other objects ( like other buttons ) here 
}

function click(){
  var sessionId = document.getElementById('session_id').value;
  var token = document.getElementById('token').value;
  document.getElementById("demo").innerHTML = 'you have entered :'+ sessionId + token;

}

function docEvent() {
document.getElementById('submit').addEventListener("submit", clickSubmit);
}


function clickSubmit(){
  var sessionId = document.getElementById('session_id').value;
  var token = document.getElementById('token').value;
  document.getElementById("demo").innerHTML = 'you have entered :'+ sessionId + token;
  
}
