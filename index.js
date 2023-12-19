function find(n, arr) {
  let pr = 0;

  if (!arr) {
      arr = [0, 0, 0];
  }

  let timeUnit = [4, 5, 10];
  if (n < 4) {
      return 0;
  } else {
      let prof = [0, 0, 0];
      let temp = n - 4;
      prof[0] = temp * 1000;

      if (n >= 5) {
          temp = n - 5;
          prof[1] = temp * 1500;

          if (n >= 10) {
              temp = n - 10;
              prof[2] = temp * 3000;
          }
      }

      let maxIndex = getMax(prof);
      pr += prof[maxIndex];
      arr[maxIndex]++;
      return pr + find(n - timeUnit[maxIndex], arr);
  }
}

function getMax(prof) {
  if (prof[0] >= prof[1]) {
      if (prof[0] >= prof[2]) {
          return 0;
      } else {
          return 2;
      }
  } else if (prof[1] >= prof[2]) {
      return 1;
  } else {
      return 2;
  }
}

function solString(arr) {
  return "T: " + arr[1] + ", P: " + arr[0] + ", C: " + arr[2];
}

// Test cases
const testCases = [7, 8, 13];

for (let i = 0; i < testCases.length; i++) {
  const n = testCases[i];
  const arr = [0, 0, 0]; // Initialize the arr variable
  const result = find(n, arr);
  console.log(`Test Case ${i + 1}`);
  console.log(`Time Unit: ${n}`);
  console.log(`Earnings: $${result}`);
  console.log("Solution:");
  console.log(`1. ${solString(arr)}`);
  console.log();
}
