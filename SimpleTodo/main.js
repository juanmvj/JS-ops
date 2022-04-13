let button = document.getElementsByTagName("button")[0],
    input = document.getElementsByTagName("input")[0],
    ul = document.querySelector("ul");

function addDeleteButton() {
    let myNodeList = document.getElementsByTagName("li");
    console.log(myNodeList, "my node list")
    for (let i = 0; i < myNodeList.length; i++) {
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodeList[i].appendChild(span);
    }
}
function addDoneClass(liElem) {
    liElem.addEventListener("click", (event) => {
        //console.log("The event", event.target.innerText);
        event.target.classList.toggle("done");
    });
}

function removeElement() {
    var close = document.getElementsByClassName("close");
    console.log(this,"el this2")

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            console.log(this,"el this")
            div.style.display = "none";
        }
    }


}
function createElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    let newSpan = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    newSpan.className = "close";
    newSpan.appendChild(txt);
    li.appendChild(newSpan);
    ul.appendChild(li);
    addDoneClass(li);
    removeElement();
}


button.addEventListener("click", createElement);



input.addEventListener("keypress", (event) => {
    console.log(event.key);
    if (event.key == "Enter") {
        createElement();
    }//!check button
});



/*promises test  */

function test(event) {
    return new Promise((resolve, reject) => {
        if (event.key == "f") {
            resolve("this is an F");
        } else {
            reject("thi is not");
        }

    })
}

//input.addEventListener("keypress", (event) => {
  //  test(event).then(res => console.log(res)).catch(error => console.log("the error",error))
//})