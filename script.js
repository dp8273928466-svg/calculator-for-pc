const display = document.getElementById('display');

function triggerHaptic() {
    // Triggers short vibration on mobile devices if supported
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
}

function appendValue(value) {
    triggerHaptic();    
    display.value += value;
}

function clearDisplay() {
    triggerHaptic();
    display.value = '';
}

function calculate() {
    triggerHaptic();
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}