let fruits = ['Apple', 'Banana', 'Grapes'];
console.log (fruits);                   // Prints out [ 'Apple', 'Banana', 'Grapes' ]

fruits.pop()
console.log(fruits);                    // Prints out [ 'Apple', 'Banana' ]

fruits.shift();
console.log(fruits);                    // Prints out [ 'Banana' ]

fruits.push('Cherry');
console.log(fruits);                    // Prints out [ 'Banana', 'Cherry' ]

fruits.unshift('Lemon');
console.log(fruits);                    // Prints out [ 'Lemon', 'Banana', 'Cherry' ]

delete fruits[1];
console.log(fruits);                    // Prints out [ 'Lemon', <1 empty item>, 'Cherry' ]

fruits[1] = 'Orange';
console.log(fruits);                    // Prints out [ 'Lemon', 'Orange', 'Cherry' ]

fruits.splice(1,2);
console.log(fruits);                    // Prints out [ 'Lemon' ]

fruits.splice(2,0,'Orange', 'Cherry')
console.log(fruits);                    // Prints out [ 'Lemon', 'Orange', 'Cherry' ]

let citrusFruits = fruits.slice(0,2)
console.log(fruits);                    // Prints out [ 'Lemon', 'Orange', 'Cherry' ]
console.log(citrusFruits);              // Prints out [ 'Lemon', 'Orange' ]
