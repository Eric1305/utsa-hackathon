const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask a question and return the answer as a promise
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Function to close the readline interface
function closeInterface() {
  rl.close();
}

// Export askQuestion and closeInterface so they can be used in other files
module.exports = {
  askQuestion,
  closeInterface
};
