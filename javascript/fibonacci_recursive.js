function fibonacci(n) {
  if (n<2) {
    return n
  }

  return fibonacci(n-1) + fibonacci(n-2)
  
  // **iterative solution**
  // const nextTwo = [0,1]
  // for(let i = 0; i < n -1; ++i) {
  //   nextTwo.push(nextTwo[nextTwo.length -1] + nextTwo[nextTwo.length-2])
  // }
  // return nextTwo[nextTwo.length -1]

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// When an arguement n is given, return the value in that position of the Fib Seq.
// Basecases: If n < 2, return n. If nextTwo.length -1 = n, return nextTwo.length -1.
// Return value: the number in fib seq at position n.
// Recursive function: n-1 (counter)
// I learned you can return recursive calls, and perform operations using more than one call.
// I also learned that the return value inside the recursive function breaks the loop whereas
// the return value containing recursive functions creates the iteration.
