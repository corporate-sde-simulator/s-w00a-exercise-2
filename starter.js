/*
=============================================================================
  EXERCISE 2: JAVASCRIPT / NODE.JS FUNDAMENTALS
=============================================================================
  Welcome! This file teaches you JavaScript step by step.

  HOW TO USE THIS FILE:
  1. Read each section — it explains a concept with examples
  2. Find the TODO comments — they tell you what to write
  3. Replace 'null' or the empty function body with your code
  4. Run tests: node test_exercise.js

  Don't delete any function names! Only change code where you see TODO.
=============================================================================
*/


// ============================================================================
// PART 1: VARIABLES
// ============================================================================
//
// JavaScript has two main ways to declare variables:
//   const name = "Alice";    ← can't be reassigned (use this by default!)
//   let count = 0;           ← can be reassigned
//   (avoid 'var' — it's the old way and has weird scoping)
//
// Types:
//   "hello"     → string (text)
//   42          → number (integer and float are both 'number')
//   true/false  → boolean
//   null        → intentionally empty
//   undefined   → not assigned yet
//   [1, 2, 3]   → array (like Python's list)
//   {key: "val"} → object (like Python's dictionary)
//
// EXAMPLE:
function exampleVariables() {
    const greeting = "Hello";
    let count = 10;
    const pi = 3.14159;
    const isActive = true;   // note: camelCase, not snake_case
    return { greeting, count, pi, isActive };
}


// TODO 1: Create and return an object with these properties:
//   - name (your name, a string)
//   - age (your age, a number)
//   - gpa (a decimal number like 8.5)
//   - isEnrolled (true or false)
// HINT: return { name: "Alice", age: 20, gpa: 8.5, isEnrolled: true };
function createVariables() {
    // Write your code below this line
    return null;
}


// ============================================================================
// PART 2: FUNCTIONS
// ============================================================================
//
// JavaScript has two styles of functions:
//
// STYLE 1 — Regular function:
//   function greet(name) {
//       return "Hello, " + name + "!";
//   }
//
// STYLE 2 — Arrow function (shorter):
//   const greet = (name) => {
//       return "Hello, " + name + "!";
//   }
//
// Even shorter for one-liners:
//   const greet = (name) => "Hello, " + name + "!";
//
// EXAMPLE:
function exampleAdd(a, b) {
    return a + b;
    // exampleAdd(3, 5) → 8
}

// Arrow function version:
const exampleMultiply = (a, b) => a * b;
// exampleMultiply(3, 5) → 15


// TODO 2: Write a function that calculates the area of a circle
// Formula: area = π × radius²
// Use Math.PI for π and Math.pow(radius, 2) OR radius * radius for ²
// EXAMPLE: circleArea(5) → 78.53981633974483
function circleArea(radius) {
    // Write your code below this line
    return null;
}


// TODO 3: Write an arrow function that checks if a number is positive
// Return true if number > 0, false otherwise
// EXAMPLE: isPositive(5) → true
// EXAMPLE: isPositive(-3) → false
// EXAMPLE: isPositive(0) → false
const isPositive = (num) => {
    // Write your code below this line
    return null;
};


// ============================================================================
// PART 3: ARRAYS (like Python's lists)
// ============================================================================
//
// Creating arrays:
//   const numbers = [1, 2, 3, 4, 5];
//   const names = ["Alice", "Bob", "Charlie"];
//   const empty = [];
//
// Accessing (index starts at 0):
//   numbers[0]         → 1 (first item)
//   numbers[numbers.length - 1] → 5 (last item)
//
// Common methods:
//   numbers.push(6)    → adds 6 to the end
//   numbers.pop()      → removes and returns last item
//   numbers.length     → number of items (NOT a function! No parentheses!)
//   numbers.includes(3) → true (checks if 3 is in array)
//
// POWERFUL array methods (you'll use these a LOT):
//
//   .map()    — transform each item
//     [1, 2, 3].map(x => x * 2)          → [2, 4, 6]
//
//   .filter() — keep items that match a condition
//     [1, 2, 3, 4].filter(x => x > 2)    → [3, 4]
//
//   .reduce() — combine all items into one value
//     [1, 2, 3].reduce((sum, x) => sum + x, 0) → 6
//
//   .find()   — find first item that matches
//     [1, 2, 3].find(x => x > 1)         → 2
//
// EXAMPLE:
function exampleDoubleAll(numbers) {
    return numbers.map(num => num * 2);
    // exampleDoubleAll([1, 2, 3]) → [2, 4, 6]
}


// TODO 4: Write a function that returns the sum of all numbers in an array
// EXAMPLE: sumArray([1, 2, 3, 4]) → 10
// HINT: Use .reduce() or a for loop
function sumArray(numbers) {
    // Write your code below this line
    return null;
}


// TODO 5: Write a function that returns only strings longer than 3 characters
// EXAMPLE: filterLongStrings(["hi", "hello", "hey", "python"]) → ["hello", "python"]
// HINT: Use .filter()
function filterLongStrings(strings) {
    // Write your code below this line
    return null;
}


// TODO 6: Write a function that finds a user by ID in an array of user objects
// EXAMPLE: findUserById([{id: 1, name: "Alice"}, {id: 2, name: "Bob"}], 2)
//    → {id: 2, name: "Bob"}
// If no user found, return null
// HINT: Use .find()
function findUserById(users, id) {
    // Write your code below this line
    return null;
}


// ============================================================================
// PART 4: OBJECTS (like Python's dictionaries)
// ============================================================================
//
// Objects store key-value pairs:
//   const person = {
//       name: "Alice",        ← keys don't need quotes (unless they have spaces)
//       age: 25,
//       city: "Chennai"
//   };
//
// Accessing:
//   person.name          → "Alice" (dot notation — most common)
//   person["name"]       → "Alice" (bracket notation — like Python)
//   person.email         → undefined (key doesn't exist)
//
// Adding/updating:
//   person.email = "alice@test.com";
//   person.age = 26;
//
// Checking if key exists:
//   "name" in person     → true
//   person.hasOwnProperty("name") → true
//
// Looping:
//   for (const key in person) {
//       console.log(`${key}: ${person[key]}`);
//   }
//   // Or:
//   Object.keys(person)   → ["name", "age", "city"]
//   Object.values(person) → ["Alice", 25, "Chennai"]
//   Object.entries(person) → [["name", "Alice"], ["age", 25], ...]
//
// EXAMPLE:
function exampleCountWords(text) {
    const counts = {};
    const words = text.split(" ");
    for (const word of words) {
        counts[word] = (counts[word] || 0) + 1;
    }
    return counts;
    // exampleCountWords("a b a") → {a: 2, b: 1}
}


// TODO 7: Write a function that creates a config object
// Parameters: host (string), port (number), ssl (boolean, default true)
// Return: { host, port, ssl, url }
// where url = "https://host:port" if ssl is true, "http://host:port" if false
// EXAMPLE: createConfig("localhost", 3000) → 
//   { host: "localhost", port: 3000, ssl: true, url: "https://localhost:3000" }
function createConfig(host, port, ssl = true) {
    // Write your code below this line
    return null;
}


// TODO 8: Write a function that groups an array of objects by a key
// EXAMPLE: groupBy([{type: "fruit", name: "apple"},
//                   {type: "veggie", name: "carrot"},
//                   {type: "fruit", name: "banana"}], "type")
//   → { fruit: [{type: "fruit", name: "apple"}, {type: "fruit", name: "banana"}],
//       veggie: [{type: "veggie", name: "carrot"}] }
function groupBy(items, key) {
    // Write your code below this line
    return null;
}


// ============================================================================
// PART 5: CLASSES
// ============================================================================
//
// JavaScript classes use 'this' instead of Python's 'self':
//
// SYNTAX:
//   class ClassName {
//       constructor(param1, param2) {    ← like Python's __init__
//           this.param1 = param1;        ← 'this' = this object
//           this.param2 = param2;
//       }
//
//       methodName() {                   ← no 'function' keyword needed
//           return this.param1;
//       }
//   }
//
// EXAMPLE:
class ExampleCounter {
    constructor(start = 0) {
        this.count = start;
    }

    increment() {
        this.count++;        // shorthand for this.count = this.count + 1
        return this.count;
    }

    decrement() {
        this.count--;
        return this.count;
    }

    getCount() {
        return this.count;
    }
}
// const counter = new ExampleCounter(10);
// counter.increment() → 11
// counter.increment() → 12


// TODO 9: Create a ShoppingCart class
//
// constructor():
//   - Initialize this.items as an empty array
//
// addItem(name, price, quantity = 1):
//   - Push an object { name, price, quantity } to this.items
//
// removeItem(name):
//   - Remove the item with that name from this.items
//   - HINT: this.items = this.items.filter(item => item.name !== name)
//
// getTotal():
//   - Return the total cost (sum of price × quantity for each item)
//
// getItemCount():
//   - Return total number of items (sum of all quantities)
//
// EXAMPLE:
//   const cart = new ShoppingCart();
//   cart.addItem("Laptop", 999.99);
//   cart.addItem("Mouse", 29.99, 2);
//   cart.getTotal()     → 1059.97
//   cart.getItemCount() → 3
//   cart.removeItem("Mouse");
//   cart.getTotal()     → 999.99

class ShoppingCart {
    constructor() {
        // TODO: Initialize this.items
    }

    addItem(name, price, quantity = 1) {
        // TODO: Add item to this.items
    }

    removeItem(name) {
        // TODO: Remove item by name
    }

    getTotal() {
        // TODO: Calculate and return total
        return 0;
    }

    getItemCount() {
        // TODO: Return sum of quantities
        return 0;
    }
}


// ============================================================================
// PART 6: ERROR HANDLING
// ============================================================================
//
// SYNTAX:
//   try {
//       const result = riskyOperation();
//   } catch (error) {
//       console.error("Something went wrong:", error.message);
//   } finally {
//       cleanup();   // always runs
//   }
//
// Throwing errors:
//   throw new Error("Something went wrong");
//
// EXAMPLE:
function exampleSafeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return null;
    }
    // exampleSafeParse('{"a": 1}') → {a: 1}
    // exampleSafeParse('bad json') → null
}


// TODO 10: Write a function that safely parses JSON and returns a default
// If the JSON is valid, return the parsed object
// If the JSON is invalid, return the defaultValue
// EXAMPLE: safeJsonParse('{"name": "Alice"}') → {name: "Alice"}
// EXAMPLE: safeJsonParse('not json', {}) → {}
function safeJsonParse(jsonString, defaultValue = null) {
    // Write your code below this line
    return null;
}


// TODO 11: Write a function that validates an email (simple check)
// Throw an Error if email doesn't contain '@'
// Throw an Error if email doesn't contain '.' after '@'
// Return true if valid
// EXAMPLE: validateEmail("user@example.com") → true
// EXAMPLE: validateEmail("invalid") → throws Error("Invalid email: must contain @")
function validateEmail(email) {
    // Write your code below this line
    return null;
}


// ============================================================================
// PART 7: TEMPLATE LITERALS (String formatting)
// ============================================================================
//
// Use backticks (`) instead of quotes, and ${} for expressions:
//   const name = "Alice";
//   const msg = `Hello, ${name}!`;        → "Hello, Alice!"
//   const calc = `2 + 2 = ${2 + 2}`;      → "2 + 2 = 4"
//   const multi = `Line 1
//   Line 2`;                              → multi-line string!

// TODO 12: Write a function that formats a log entry
// Parameters: level (string), message (string), timestamp (Date object)
// Return: "[YYYY-MM-DD HH:MM:SS] LEVEL: message"
// EXAMPLE: formatLog("ERROR", "Server crashed", new Date(2026, 0, 15, 14, 30, 0))
//    → "[2026-01-15 14:30:00] ERROR: Server crashed"
// HINT: date.getFullYear(), date.getMonth()+1, date.getDate(),
//       date.getHours(), date.getMinutes(), date.getSeconds()
//       Use .toString().padStart(2, '0') to add leading zeros
function formatLog(level, message, timestamp) {
    // Write your code below this line
    return null;
}


// ============================================================================
// PART 8: ASYNC / AWAIT & PROMISES
// ============================================================================
//
// Node.js is ASYNCHRONOUS — it does things without blocking.
// This is THE #1 thing that trips up people coming from Python.
//
// A PROMISE is a value that will be available "later":
//   const promise = fetch("https://api.example.com/data");
//   // promise is NOT the data — it's a PROMISE of data
//
// USING PROMISES WITH .then():
//   fetch(url)
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//
// USING async/await (MUCH EASIER — use this!):
//   async function getData() {
//       try {
//           const response = await fetch(url);
//           const data = await response.json();
//           return data;
//       } catch (error) {
//           console.error(error);
//       }
//   }
//
// KEY RULES:
//   1. 'await' can ONLY be used inside an 'async' function
//   2. 'async' functions ALWAYS return a Promise
//   3. Use try/catch for error handling with async/await
//
// CREATING A PROMISE:
//   function delay(ms) {
//       return new Promise(resolve => {
//           setTimeout(resolve, ms);
//       });
//   }
//   await delay(1000);  // waits 1 second
//
// EXAMPLE:
async function exampleAsyncFetch() {
    // Simulating an async database call
    const data = await new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: "Alice" }), 100);
    });
    return data;
}


// TODO 13: Write an async function that simulates fetching user data
// It should return a Promise that resolves after a short delay
// Parameters: userId (number)
// Return: { id: userId, name: "User_" + userId, status: "active" }
// HINT: Use the pattern from the example above
// EXAMPLE: await fetchUser(42) → { id: 42, name: "User_42", status: "active" }
async function fetchUser(userId) {
    // Write your code below this line — use await + new Promise
    return null;
}


// TODO 14: Write an async function that fetches multiple users in parallel
// Parameters: userIds (array of numbers)
// Return: array of user objects (use your fetchUser function!)
// HINT: Use Promise.all() to run multiple promises at once:
//   const results = await Promise.all(promises);
// EXAMPLE: await fetchMultipleUsers([1, 2, 3])
//   → [{ id: 1, name: "User_1", ... }, { id: 2, ... }, { id: 3, ... }]
async function fetchMultipleUsers(userIds) {
    // Write your code below this line
    return null;
}


// ============================================================================
// PART 9: CALLBACKS
// ============================================================================
//
// Before async/await, Node.js used CALLBACKS for async code.
// You'll see this pattern in older codebases (and many simulator tasks!).
//
// A CALLBACK is a function passed to another function, to be called later:
//
//   function doSomething(callback) {
//       const result = computeResult();
//       callback(null, result);  // null = no error, result = data
//   }
//
// NODE.JS CALLBACK CONVENTION:
//   callback(error, result)
//   - First argument is always the error (null if no error)
//   - Second argument is the result
//
// EXAMPLE:
function exampleReadFile(filename, callback) {
    if (!filename) {
        callback(new Error("Filename required"), null);
        return;
    }
    // Simulate reading file
    setTimeout(() => {
        callback(null, `Contents of ${filename}`);
    }, 10);
}

// TODO 15: Write a function that processes data with callbacks
// Parameters: data (array of numbers), callback (function)
// Process: Calculate sum and average of the data
// Call callback(null, {sum, average}) on success
// Call callback(error, null) if data is empty or not an array
// EXAMPLE:
//   processData([10, 20, 30], (err, result) => {
//       console.log(result); // { sum: 60, average: 20 }
//   });
function processData(data, callback) {
    // Write your code below this line
    callback(new Error("Not implemented"), null);
}


// ============================================================================
// PART 10: JSON & DATA HANDLING
// ============================================================================
//
// JSON is the universal data format in JavaScript:
//
// PARSE (string → object):
//   const obj = JSON.parse('{"name": "Alice"}');
//
// STRINGIFY (object → string):
//   const json = JSON.stringify({name: "Alice"});
//   const pretty = JSON.stringify({name: "Alice"}, null, 2);  // indented
//
// COMMON PATTERNS:
//   // Merge objects (like Python's dict.update()):
//   const merged = { ...defaults, ...overrides };
//   // OR:
//   const merged = Object.assign({}, defaults, overrides);
//
//   // Destructuring (extract fields):
//   const { name, age } = person;
//   const { host, port = 3000 } = config;  // with default
//
// EXAMPLE:
function exampleMergeConfig(defaults, overrides) {
    return { ...defaults, ...overrides };
}


// TODO 16: Write a function that deep-merges two config objects
// Unlike simple merge, nested objects should be merged, not replaced
// EXAMPLE: deepMerge(
//   { server: { host: "localhost", port: 3000 }, debug: false },
//   { server: { port: 8080 }, debug: true }
// ) → { server: { host: "localhost", port: 8080 }, debug: true }
// HINT: Check if both values are objects, then recurse
function deepMerge(base, override) {
    // Write your code below this line
    return null;
}


// ============================================================================
// PART 11: REGULAR EXPRESSIONS
// ============================================================================
//
// Regex in JS — used for log parsing, validation, data extraction:
//
// CREATING:
//   const pattern = /\d+/;         ← literal syntax
//   const pattern = new RegExp("\\d+");  ← constructor syntax
//
// METHODS:
//   pattern.test(str)      → true/false (does it match?)
//   str.match(pattern)     → array of matches (or null)
//   str.replace(pattern, replacement) → new string
//   str.matchAll(/pattern/g)  → iterator of all matches
//
// FLAGS:
//   /pattern/g  → global (find ALL matches, not just first)
//   /pattern/i  → case insensitive
//   /pattern/m  → multiline
//
// EXAMPLE:
function exampleExtractNumbers(text) {
    return (text.match(/\d+/g) || []).map(Number);
    // exampleExtractNumbers("I have 3 cats and 2 dogs") → [3, 2]
}


// TODO 17: Write a function that validates a simple IP address format
// An IP address has 4 groups of 1-3 digits separated by dots
// Return true if valid format, false otherwise
// EXAMPLE: isValidIp("192.168.1.1") → true
// EXAMPLE: isValidIp("hello") → false
// EXAMPLE: isValidIp("1.2.3") → false (only 3 groups)
// HINT: Use regex /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/ and .test()
function isValidIp(str) {
    // Write your code below this line
    return null;
}


// TODO 18: Write a function that extracts key-value pairs from a log string
// Log format: "key1=value1 key2=value2 key3=value3"
// Return an object with key-value pairs
// EXAMPLE: parseKeyValues("host=localhost port=3000 debug=true")
//   → { host: "localhost", port: "3000", debug: "true" }
// HINT: Split by spaces, then split each by '='
function parseKeyValues(logString) {
    // Write your code below this line
    return null;
}


// ============================================================================
// EXPORTS — Don't change this section!
// ============================================================================
module.exports = {
    createVariables,
    circleArea,
    isPositive,
    sumArray,
    filterLongStrings,
    findUserById,
    createConfig,
    groupBy,
    ShoppingCart,
    safeJsonParse,
    validateEmail,
    formatLog,
    fetchUser,
    fetchMultipleUsers,
    processData,
    deepMerge,
    isValidIp,
    parseKeyValues,
};

