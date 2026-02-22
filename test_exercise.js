/*
  Tests for Exercise 2: JavaScript / Node.js Fundamentals
  Run with: node test_exercise.js
*/

const {
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
} = require("./starter");

let passed = 0;
let failed = 0;
let total = 0;

function test(name, fn) {
    total++;
    try {
        fn();
        passed++;
        console.log(`  ✅ ${name}`);
    } catch (e) {
        failed++;
        console.log(`  ❌ ${name}`);
        console.log(`     Expected: ${e.expected}`);
        console.log(`     Got:      ${e.actual || e.message}`);
    }
}

function assertEqual(actual, expected) {
    const a = JSON.stringify(actual);
    const e = JSON.stringify(expected);
    if (a !== e) {
        const err = new Error("Assertion failed");
        err.actual = a;
        err.expected = e;
        throw err;
    }
}

function assertType(value, type, fieldName) {
    if (typeof value !== type) {
        const err = new Error("Type check failed");
        err.actual = `${fieldName} is ${typeof value}`;
        err.expected = `${fieldName} should be ${type}`;
        throw err;
    }
}

function assertThrows(fn) {
    let threw = false;
    try { fn(); } catch (e) { threw = true; }
    if (!threw) {
        const err = new Error("Should have thrown");
        err.expected = "function to throw an Error";
        err.actual = "no error thrown";
        throw err;
    }
}

// ─── Part 1: Variables ─────────────────────────────────────────────
console.log("\n📦 Part 1: Variables");
test("createVariables returns an object", () => {
    const result = createVariables();
    assertEqual(result !== null && typeof result === "object", true);
});
test("createVariables has correct types", () => {
    const { name, age, gpa, isEnrolled } = createVariables();
    assertType(name, "string", "name");
    assertType(age, "number", "age");
    assertType(gpa, "number", "gpa");
    assertType(isEnrolled, "boolean", "isEnrolled");
});

// ─── Part 2: Functions ────────────────────────────────────────────
console.log("\n🔧 Part 2: Functions");
test("circleArea(5) ≈ 78.54", () => {
    const result = circleArea(5);
    assertEqual(Math.abs(result - 78.53981633974483) < 0.001, true);
});
test("circleArea(1) ≈ 3.14", () => {
    assertEqual(Math.abs(circleArea(1) - Math.PI) < 0.001, true);
});
test("isPositive(5) → true", () => assertEqual(isPositive(5), true));
test("isPositive(-3) → false", () => assertEqual(isPositive(-3), false));
test("isPositive(0) → false", () => assertEqual(isPositive(0), false));

// ─── Part 3: Arrays ──────────────────────────────────────────────
console.log("\n📋 Part 3: Arrays");
test("sumArray([1,2,3,4]) → 10", () => assertEqual(sumArray([1, 2, 3, 4]), 10));
test("sumArray([]) → 0", () => assertEqual(sumArray([]), 0));
test("filterLongStrings filters correctly", () => {
    assertEqual(filterLongStrings(["hi", "hello", "hey", "python"]), ["hello", "python"]);
});
test("filterLongStrings all short → []", () => {
    assertEqual(filterLongStrings(["hi", "go"]), []);
});
test("findUserById finds existing user", () => {
    const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
    assertEqual(findUserById(users, 2), { id: 2, name: "Bob" });
});
test("findUserById returns null for missing user", () => {
    assertEqual(findUserById([{ id: 1, name: "Alice" }], 99), null);
});

// ─── Part 4: Objects ──────────────────────────────────────────────
console.log("\n📦 Part 4: Objects");
test("createConfig with defaults", () => {
    const result = createConfig("localhost", 3000);
    assertEqual(result.host, "localhost");
    assertEqual(result.port, 3000);
    assertEqual(result.ssl, true);
    assertEqual(result.url, "https://localhost:3000");
});
test("createConfig with ssl=false", () => {
    const result = createConfig("example.com", 80, false);
    assertEqual(result.url, "http://example.com:80");
});
test("groupBy groups correctly", () => {
    const items = [
        { type: "fruit", name: "apple" },
        { type: "veggie", name: "carrot" },
        { type: "fruit", name: "banana" },
    ];
    const result = groupBy(items, "type");
    assertEqual(result.fruit.length, 2);
    assertEqual(result.veggie.length, 1);
});

// ─── Part 5: Classes ─────────────────────────────────────────────
console.log("\n🏗️  Part 5: Classes");
test("ShoppingCart addItem and getTotal", () => {
    const cart = new ShoppingCart();
    cart.addItem("Laptop", 999.99);
    cart.addItem("Mouse", 29.99, 2);
    assertEqual(Math.round(cart.getTotal() * 100) / 100, 1059.97);
});
test("ShoppingCart getItemCount", () => {
    const cart = new ShoppingCart();
    cart.addItem("A", 10, 3);
    cart.addItem("B", 5, 2);
    assertEqual(cart.getItemCount(), 5);
});
test("ShoppingCart removeItem", () => {
    const cart = new ShoppingCart();
    cart.addItem("A", 10);
    cart.addItem("B", 20);
    cart.removeItem("A");
    assertEqual(cart.getTotal(), 20);
    assertEqual(cart.getItemCount(), 1);
});

// ─── Part 6: Error Handling ──────────────────────────────────────
console.log("\n⚠️  Part 6: Error Handling");
test("safeJsonParse valid JSON", () => {
    assertEqual(safeJsonParse('{"name": "Alice"}'), { name: "Alice" });
});
test("safeJsonParse invalid JSON returns default", () => {
    assertEqual(safeJsonParse("not json", {}), {});
});
test("safeJsonParse invalid JSON returns null by default", () => {
    assertEqual(safeJsonParse("bad"), null);
});
test("validateEmail valid email returns true", () => {
    assertEqual(validateEmail("user@example.com"), true);
});
test("validateEmail without @ throws", () => {
    assertThrows(() => validateEmail("invalid"));
});
test("validateEmail without . after @ throws", () => {
    assertThrows(() => validateEmail("user@localhost"));
});

// ─── Part 7: String Templates ────────────────────────────────────
console.log("\n📝 Part 7: String Templates");
test("formatLog formats correctly", () => {
    const result = formatLog("ERROR", "Server crashed", new Date(2026, 0, 15, 14, 30, 0));
    assertEqual(result, "[2026-01-15 14:30:00] ERROR: Server crashed");
});
test("formatLog pads single digits", () => {
    const result = formatLog("INFO", "Started", new Date(2026, 2, 5, 9, 5, 3));
    assertEqual(result, "[2026-03-05 09:05:03] INFO: Started");
});

// ─── Summary ─────────────────────────────────────────────────────
// (async tests added below — we need to wrap in an async runner)

async function runAsyncTests() {
    // ─── Part 8: Async/Await ─────────────────────────────────────────
    console.log("\n⚡ Part 8: Async/Await");
    try {
        const user = await fetchUser(42);
        test("fetchUser returns correct shape", () => {
            assertEqual(user.id, 42);
            assertEqual(user.name, "User_42");
            assertEqual(user.status, "active");
        });
    } catch (e) {
        test("fetchUser returns correct shape", () => { throw { expected: "user object", actual: e.message }; });
    }

    try {
        const users = await fetchMultipleUsers([1, 2, 3]);
        test("fetchMultipleUsers returns 3 users", () => {
            assertEqual(users.length, 3);
            assertEqual(users[0].id, 1);
            assertEqual(users[2].id, 3);
        });
    } catch (e) {
        test("fetchMultipleUsers returns 3 users", () => { throw { expected: "3 users", actual: e.message }; });
    }

    // ─── Part 9: Callbacks ───────────────────────────────────────────
    console.log("\n📞 Part 9: Callbacks");
    test("processData with valid data", (done) => {
        processData([10, 20, 30], (err, result) => {
            assertEqual(err, null);
            assertEqual(result.sum, 60);
            assertEqual(result.average, 20);
        });
    });
    test("processData with empty array", () => {
        processData([], (err, result) => {
            assertEqual(err !== null, true);
        });
    });

    // ─── Part 10: JSON & Data ────────────────────────────────────────
    console.log("\n📋 Part 10: JSON & Data");
    test("deepMerge merges nested objects", () => {
        const result = deepMerge(
            { server: { host: "localhost", port: 3000 }, debug: false },
            { server: { port: 8080 }, debug: true }
        );
        assertEqual(result.server.host, "localhost");
        assertEqual(result.server.port, 8080);
        assertEqual(result.debug, true);
    });
    test("deepMerge handles flat objects", () => {
        assertEqual(deepMerge({ a: 1 }, { b: 2 }), { a: 1, b: 2 });
    });

    // ─── Part 11: Regex ──────────────────────────────────────────────
    console.log("\n🔍 Part 11: Regex");
    test("isValidIp valid", () => assertEqual(isValidIp("192.168.1.1"), true));
    test("isValidIp invalid text", () => assertEqual(isValidIp("hello"), false));
    test("isValidIp too few groups", () => assertEqual(isValidIp("1.2.3"), false));

    test("parseKeyValues basic", () => {
        assertEqual(
            parseKeyValues("host=localhost port=3000 debug=true"),
            { host: "localhost", port: "3000", debug: "true" }
        );
    });

    // ─── Summary ─────────────────────────────────────────────────────
    console.log("\n" + "=".repeat(50));
    console.log(`Results: ${passed}/${total} tests passed`);
    if (failed > 0) {
        console.log(`❌ ${failed} tests failed — keep working!`);
    } else {
        console.log("🎉 All tests passed! You're FULLY ready for JS tasks!");
    }
    console.log("=".repeat(50) + "\n");
}

runAsyncTests();

