chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'main',
    bounds: { width: 320, height: 180 },
	alwaysOnTop : true
  });
});

chrome.commands.onCommand.addListener(function(command) {
  chrome.app.window.create('index.html', {
    id: 'main',
    bounds: { width: 320, height: 180 },
        alwaysOnTop : true
  });
});
