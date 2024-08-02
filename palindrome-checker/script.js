const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
let isPalindrome = true;

const stringToArray = (str) => {
    // remove any whitespace and non-alphanumeric characters, and convert to lowercase
    const newString = str.replace(/[^A-Za-z0-9]|\s/g, "").toLowerCase();
    return newString.split("");
}

function resetInput() {
    textInput.value = "";
}

function checkPalindrome() {
    // clear current output text
    resultText.innerText = "";

    // check if input is blank, throw error if true
    if (textInput.value === "") {
        alert("Please input a value");
        return;
    }
    // convert input to array and store as variable
    const a = stringToArray(textInput.value);
    console.log(a);

    // check if input is palindrome
    for (let i = 1; i <= a.length / 2; i++) {
        if (a[i - 1] !== a[a.length - i]) {
            isPalindrome = false;
            break;
        } else {
            isPalindrome = true;
        }
    }
    if (isPalindrome) {
        // output text if input is palindrome
        resultText.innerText = `${textInput.value} is a palindrome`;
        console.log(`"${textInput.value}" is a palindrome`);
    } else {
        // output text if input is not palindrome
        resultText.innerText = `${textInput.value} is not a palindrome`;
        console.log(`"${textInput.value}" is not a palindrome`);
    }

    // clear textbox
    resetInput();
}

checkButton.addEventListener("click", checkPalindrome);