// replace these values with those generated in your TokBox Account
var apiKey = "46792804";
var sessionId = "2_MX40Njc5MjgwNH5-MTU5MjMxMDQ5MjE5MH45OVlMa0hBdDlZZzlzMWNvM2FIUEVDMTZ-fg";
var token = "T1==cGFydG5lcl9pZD00Njc5MjgwNCZzaWc9ODc5NDUyMzQzZWU2ODFkNGY1OTllYTM5NmU5MDM1MDJkNTdlZWMxZTpzZXNzaW9uX2lkPTJfTVg0ME5qYzVNamd3Tkg1LU1UVTVNak14TURRNU1qRTVNSDQ1T1ZsTWEwaEJkRGxaWnpsek1XTnZNMkZJVUVWRE1UWi1mZyZjcmVhdGVfdGltZT0xNTkyMzk3OTQwJm5vbmNlPTAuMDk3NDcxODQxNjUwODE3Nzkmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTU5MzAwMjcyMSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="


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
