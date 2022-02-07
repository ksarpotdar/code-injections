document.body.getElementsByClassName("wordleCheatAnswer")[0].textContent = app.answer;

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        window.dispatchEvent(new KeyboardEvent('keydown', {
        'keyCode': app.answer.charCodeAt(0)
        }));
        window.dispatchEvent(new KeyboardEvent('keydown', {
        'keyCode': app.answer.charCodeAt(1)
        }));
        window.dispatchEvent(new KeyboardEvent('keydown', {
        'keyCode': app.answer.charCodeAt(2)
        }));
        window.dispatchEvent(new KeyboardEvent('keydown', {
        'keyCode': app.answer.charCodeAt(3)
        }));
        window.dispatchEvent(new KeyboardEvent('keydown', {
        'keyCode': app.answer.charCodeAt(4)
        }));
        window.dispatchEvent(new KeyboardEvent('keydown', {
        'keyCode': 13
        }));
    } 
}