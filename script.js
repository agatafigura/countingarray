let array = [0];

console.log(array);

init();

function init() {
    itetator = 0;
    loop();
}

function loop() {
    itetator++;
    array.unshift(itetator);
    console.log(array);
    if(array.length < 9) {
        setTimeout(loop, 1000);
    }
    if(array.length == 9) {
        array.pop();
        setTimeout(loop, 1000);
    }
}