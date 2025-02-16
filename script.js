function toCase(text) {
    let lowerCaseText = text.toLowerCase();
    let upperCaseText = text.toUpperCase();
    let result = lowerCaseText + "-" + upperCaseText;
    return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
