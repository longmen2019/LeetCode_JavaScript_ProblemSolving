// Define an asynchronous function named 'sleep' that takes 'millis' as an argument
function sleep(millis) {
    // Return a new Promise object
    return new Promise(resolve => 
      // Use setTimeout to call the 'resolve' function after 'millis' milliseconds
      setTimeout(resolve, millis)
    );
  }
  
  // Example usage:
  
  // Record the current time in milliseconds since the Unix epoch
  let t = Date.now();
  
  // Call the 'sleep' function with 100 milliseconds and chain a 'then' method to it
  sleep(100).then(() => {
    // Log the difference between the current time and the recorded time 't'
    console.log(Date.now() - t); // Should print approximately 100
  });
  
  // Call the 'sleep' function again with 200 milliseconds and chain another 'then' method to it
  sleep(200).then(() => {
    // Log the difference between the current time and the recorded time 't'
    console.log(Date.now() - t); // Should print approximately 300 (100 + 200)
  });
  