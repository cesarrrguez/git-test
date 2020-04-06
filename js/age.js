function checkAge(age) {
    if (age < 18) {
        return "You are not an adult yet!";
    } else if (age >= 18) {
        return "You are an adult!";
    } else {
        return "You don't have an age I guess!";
    }
}

console.log(checkAge(15));      // Prints out "You are not an adult yet!"
console.log(checkAge(18));      // Prints out "You are an adult!"
console.log(checkAge("age"));   // Prints out "You don't have an age I guess!"