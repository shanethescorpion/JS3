import getUserInput from "./modules.js";
import { Calculator, convertToJson, saveToLocalStorage, getFromLocalStorage, isPositive, operateOnNumbers, fetchData } from "./modules.js"

// Main Program
document.addEventListener("DOMContentLoaded", async () => {
    // User Input
    const number = getUserInput();
    
    // Ternary Operator
    const isPositiveNumber = isPositive(number);

    // Classes
    const resultAddition = Calculator.add(5, 3);
    const resultSubtraction = Calculator.subtract(10, 7);

    // JSON
    const jsonData = { key: "value" };
    const jsonString = convertToJson(jsonData);

    // Web Storage
    saveToLocalStorage("savedData", jsonString);
    const retrievedData = getFromLocalStorage("savedData");

    // Higher Order Functions
    const sum = operateOnNumbers(4, 6, (a, b) => a + b);
    const difference = operateOnNumbers(8, 3, (a, b) => a - b);

    // Fetch API (Async/Await)
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
    const fetchedData = await fetchData(apiUrl);

    // Display Results
    console.log("User Input:", number);
    console.log("Is Positive Number:", isPositiveNumber);
    console.log("Result Addition:", resultAddition);
    console.log("Result Subtraction:", resultSubtraction);
    console.log("JSON String:", jsonString);
    console.log("Retrieved Data from Local Storage:", retrievedData);
    console.log("Sum:", sum);
    console.log("Difference:", difference);
    console.log("Fetched Data:", fetchedData);
});