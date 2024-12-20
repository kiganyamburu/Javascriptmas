// Santa needs your help to figure out if he has enough money to give everyone change!
// Your goal will be to return true if everyone gets their correct change, and false if at least one person does not receive their correct change! Use the function below to get started!

// Good luck and happy coding!!
function correctChangeFromSanta(bills) {
    const changeNeeded = [5, 10, 20]; // Possible change denominations
    const changeCounts = Array(3).fill(0); // Initialize change counts

    for (const bill of bills) {
        // If the bill is 5, increment the count of 5s
        if (bill === 5) {
            changeCounts[0]++;
        } else if (bill === 10) {
            // If the bill is 10, check if there's a 5 to give as change
            if (changeCounts[0] > 0) {
                changeCounts[0]--;
            } else {
                return false; // Insufficient 5s to give change for 10
            }
        } else if (bill === 20) {
            // If the bill is 20, check if there's a 10 and a 5 or three 5s to give as change
            if (changeCounts[1] > 0 && changeCounts[0] > 0) {
                changeCounts[1]--;
                changeCounts[0]--;
            } else if (changeCounts[0] >= 3) {
                changeCounts[0] -= 3;
            } else {
                return false; // Insufficient change to give for 20
            }
        }
    }

    return true; // If we've reached this point, everyone got their correct change
}





// You can leave this code as is, this will simply console.log() different text depending on if the test case returns true or false. Feel free to add additional test cases if you would like!

// Should return true
if (correctChangeFromSanta([5,5,5,10,20])) {
    console.log("Nice job Santa, everyone got their correct change!")
}else {
    console.log("Looks like you have some work to do Santa, and bring some money next time!")
}

// Should return false
if (correctChangeFromSanta([5,5,10,10,20])) {
    console.log("Nice job Santa, everyone got their correct change!")
}else {
    console.log("Looks like you have some work to do Santa, and bring some money next time!")
}