// Event Listeners
document.getElementById('randorm-pin-generator-btn').addEventListener('click',randomPinGenerator);


// Functions
var randomPin
function randomPinGenerator() {
    randomPin = Math.floor(Math.random()*10000).toString();

    if (randomPin.length < 4) {
        randomPinGenerator();
    }
    document.getElementById('random-pin').value = randomPin;
}

function inputToDisplay(input) {
    var display = document.getElementById('display');
    var displayNum = display.value;
    if(input == 'clear'){
        display.value = '';
    }else if (input == 'shift') {
        var modifiedText = '';
        for (let i = 0; i < (displayNum.length - 1); i++) {
            const character = displayNum[i];
            modifiedText += character;
        }
        display.value = modifiedText;
    }else if (displayNum.length < 4) {
        display.value = displayNum+input;
    }else{
        alert("Lenght of PIN can't must be 4 digit.")
    }
}
var count = 2;
function submitPin() {
    var displayPin = document.getElementById('display');
    var randomPin = document.getElementById('random-pin');
    var matched = document.getElementById('matched');
    var notMatched = document.getElementById('not-matched');
    var actionLeft = document.querySelector('.action-left');
    if (displayPin.value == randomPin.value) {
        notMatched.style.display = 'none';
        matched.style.display = 'block';
        displayPin.value = '';
        randomPin.value = '';
        count = 2;
        actionLeft.innerText = count + 1 + " try left";
    }else if(count == 0){
        notMatched.style.display = 'none';
        matched.style.display = 'none';
        displayPin.value = '';
        randomPin.value = '';
        count = 2;
        actionLeft.innerText = count + 1 + " try left";
    }else if (displayPin.value != randomPin.value) {
        matched.style.display = 'none';
        notMatched.style.display = 'block';
        displayPin.value = '';
        count = count - 1;
        actionLeft.innerText = count + 1 + " try left";
    }
    
}