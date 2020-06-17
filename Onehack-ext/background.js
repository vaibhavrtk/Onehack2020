chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'main',
    bounds: { width: 500, height: 100 },
        alwaysOnTop : true
  });
});
