// replace these values with those generated in your TokBox Account
var apiKey = "46792804";
var sessionId = "1_MX40Njc5MjgwNH5-MTU5MjIyNzcxODc0MX5sSGFMOTJyVG5qUmVFY1E0bTA0VW9oMHN-fg";
var token = "T1==cGFydG5lcl9pZD00Njc5MjgwNCZzaWc9YzJiZjczNmI0OTZjNjk5M2QzYmRiNjU1ZmIyMDkwNGY3YWM0YzE3MDpzZXNzaW9uX2lkPTFfTVg0ME5qYzVNamd3Tkg1LU1UVTVNakl5TnpjeE9EYzBNWDVzU0dGTU9USnlWRzVxVW1WRlkxRTBiVEEwVlc5b01ITi1mZyZjcmVhdGVfdGltZT0xNTkyMjI3NzQ2Jm5vbmNlPTAuMjM1Mjk1NzkxNDgzMTg1MDImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU5MjIzMTMzMCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
