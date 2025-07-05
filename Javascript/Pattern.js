function printPatternRow(count, total, align = "left") {
    let stars = "⭐".repeat(count);
    let spaces = " ".repeat(total - count);
    if (align === "right") {
        console.log(spaces + stars);
    } else {
        console.log(stars);
    }
}

function runPattern() {
    console.log("\n🧑‍💻 Pattern is printing...");
    
    let count = 0;
    let interval = setInterval(() => {
        count++;
        printPatternRow(count, 10); // increasing
        if (count === 10) {
            clearInterval(interval);
            runReversePattern();
        }
    }, 50);
}

function runReversePattern() {
    let count = 0;
    let interval = setInterval(() => {
        count++;
        printPatternRow(10 - count, 10); // decreasing
        if (count === 10) {
            clearInterval(interval);
            runRightAlignedPattern();
        }
    }, 50);
}

function runRightAlignedPattern() {
    let count = 0;
    let interval = setInterval(() => {
        count++;
        printPatternRow(count, 10, "right"); // right aligned increasing
        if (count === 10) {
            clearInterval(interval);
            runReverseRightAligned();
        }
    }, 50);
}

function runReverseRightAligned() {
    let count = 0;
    let interval = setInterval(() => {
        count++;
        printPatternRow(10 - count, 10, "right"); // right aligned decreasing
        if (count === 10) {
            clearInterval(interval);
            console.log("✅ Pattern Printing Done");
        }
    }, 50);
}

runPattern();
