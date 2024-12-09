// Function to check if a number is positive, negative, or zero
function checkNumber() {
    let number = document.getElementById("numberInput").value;
    let result = "";

    if (number > 0) {
        result = "The number is positive.";
    } else if (number < 0) {
        result = "The number is negative.";
    } else if (number == 0) {
        result = "The number is zero.";
    } else {
        result = "Please enter a valid number.";
    }

    document.getElementById("result").innerHTML = result;
}

// Function to display numbers from 1 to 5 using a loop
function displayNumbers() {
    let numberList = document.getElementById("numberList");
    numberList.innerHTML = ""; // Clear previous list items

    // Use a for loop to add numbers to the list
    for (let i = 1; i <= 10; i++) {
        // Only print even numbers
        if (i % 2 !== 1) {
            //create a new HTML element that you can then add to the DOM (Document Object Model).
            let listItem = document.createElement("li");
            //textContent is a convenient way to print output directly to an HTML element.
            listItem.textContent = "Number: " + i;
            numberList.appendChild(listItem);
        }
    }
}

function displayUserNumbers() {
    let number = document.getElementById("numberInput2").value;
    let result = "";

    // Use a for loop to add numbers to the list
    for (let i = 1; i <= number; i++) {
        result = `${result} ${i}`;
    }

    document.getElementById("result2").innerHTML = result;
}

function countdown() {
    let result = "";

    // Use a for loop to add numbers to the list
    for (let i = 10; i >= 1; i--) {
        result = `${result} ${i} <br>`;
    }

    document.getElementById("result3").innerHTML = result;
}

function displayDay() {
    let number = document.getElementById("numberInput4").value;
    let result;

    switch (number) {
        case '1':
            result = "Monday";
            break;

        case '2':
            result = "Tuesday";
            break;

        case '3':
            result = "Wednesday";
            break;

        case '4':
            result = "Thursday";
            break;

        case '5':
            result = "Friday";
            break;

        case '6':
            result = "Saturday";
            break;

        case '7':
            result = "Sunday";
            break;

        default:
            result = "Unknown number of day in a week"
            break;
    }

    document.getElementById("result4").innerHTML = result;
}