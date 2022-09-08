function getCharsOfValue(value) {
    const number = parseInt(value);
    const result = number.toString(2);
    if (value === "") {
        return ""
    }
    return result;
}
function getFirstCharOfValue(value) {
    const arr = value.split("");
    const first = parseInt(arr[0]);
    const result = first.toString(2);
    if (value === "") {
        return ""
    }
    return result;
}

function getLastCharOfValue(value) {
    const arr = value.split("");
    const first = parseInt(arr[arr.length -1]);
    const result = first.toString(2);
    if (value === "") {
        return ""
    }
    return result;
}

/*function getAllsCharOfValue(value) {
    const eita = value.split("");
    console.log(eita)
    const intValues = []
    const binValues = []
    for (let i = 0; i < eita.length; i++) {
        let intNumber = parseInt(value[i]);
        intValues.push(intNumber)
        for (let j = 0; j < intValues.length; j++) {
            let binNumber = intValues[i].toString(2);
            binValues.push(binNumber)
        }
    }
    return binValues.join(' ');
}*/

function opa(text) {
    output = []
    for (let i = 0; i < text.length; i++) {
        let bin = text[i].charCodeAt().toString(2);
        while (bin.length < 8)
            bin = "0" + bin;
        output.push(bin);
    }
    return output.join(' ');
}

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
//const answer4 = document.querySelector("#answer4");
const text = document.querySelector("#text");

text.addEventListener("keyup", () => {
    let value = text.value;

    if (isNaN(value)) {
        value = opa(value);
        answer1.textContent = value;
    } else {
        answer1.textContent = getCharsOfValue(value);
        answer2.textContent = getFirstCharOfValue(value);
        answer3.textContent = getLastCharOfValue(value);
        //answer4.textContent = getAllsCharOfValue(value);
    }
});