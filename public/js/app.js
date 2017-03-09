var timeDisplay = document.querySelector('#timeDisplay');
var startButton = document.querySelector('#startButton');
var abandonButton = document.querySelector('#abandonButton');
var completeButton = document.querySelector('#completeButton');
var restartButton = document.querySelector('#restartButton');
var svg1 = document.querySelector('#svg1');
var svg2 = document.querySelector('#svg2');
var issueUrl = document.querySelector('#issue_url').value;
var bodyStr = JSON.stringify({ issueUrl: issueUrl });

var buttons = document.querySelectorAll('.cta_button');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.onclick = function () {
    handleInput(this.id);
  };
}

