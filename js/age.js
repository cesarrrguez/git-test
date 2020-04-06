function checkAge(age) {
    if (age < 18) {
        return "You are not an adult yet!";
    } else if (age >= 18) {
        return "You are an adult!";
    }
}

console.log(checkAge(15));  // Prints out "You are not an adult yet!"
console.log(checkAge(18));  // Prints out "You are an adult!"