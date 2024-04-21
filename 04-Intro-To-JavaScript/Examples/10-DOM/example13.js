const myButton = document.getElementByTagName("button")[0];

function handleClick() {
    alert("Button clicked!");
}

myButton.addEventListener("click", handleClick);
