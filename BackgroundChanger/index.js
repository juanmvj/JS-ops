let body = document.querySelector("body");
let rightValue = "red";
let leftValue = "yellow";



function changeBodyBackground(rightValue, leftValue) {
    body.style.background = `linear-gradient(to right, ${leftValue} , ${rightValue})`;
    console.log("values", rightValue, leftValue);
}
function setRightValue(event) {
    rightValue = event.detail;
    changeBodyBackground(rightValue, leftValue);
}

function setLeftValue(event) {
    leftValue = event.detail;
    changeBodyBackground(rightValue, leftValue);

}

document.addEventListener("input-event-left", setLeftValue);
document.addEventListener("input-event-right", setRightValue);


