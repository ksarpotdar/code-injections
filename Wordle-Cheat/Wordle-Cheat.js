var wordleCheatAnswer = JSON.parse(window.localStorage.getItem("gameState")).solution;

var answerChar1 = wordleCheatAnswer.charAt(0);
var answerChar2 = wordleCheatAnswer.charAt(1);
var answerChar3 = wordleCheatAnswer.charAt(2);
var answerChar4 = wordleCheatAnswer.charAt(3);
var answerChar5 = wordleCheatAnswer.charAt(4);

document.body.onkeyup = function(e){
    if(e.keyCode == 32){

window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': answerChar1
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': answerChar2
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': answerChar3
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': answerChar4
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': answerChar5
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': 'Enter'
}));

}}