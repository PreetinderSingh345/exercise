const fs = require('fs');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function findMultiplicationResult() {
  try {
    let response = await Promise.all([
      readFile('./textFiles/num1.txt'), 
      readFile('./textFiles/num2.txt'),
      readFile('./textFiles/num3.txt'),
      readFile('./textFiles/num4.txt'),
      readFile('./textFiles/num5.txt')
    ]);

    let result = response.reduce((acc, value) => acc*value, 1);
    
    console.log(result);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log('All the promises have been resolved');
  }
}

findMultiplicationResult();

// multiplyNumbers('./textFiles/num1.txt')
//   .then((val) => {
//     return Promise.all([multiplyNumbers('./textFiles/num2.txt'), val]);
//   })
//   .then(([val, partialResult]) => {
//     return Promise.all([
//       multiplyNumbers('./textFiles/num3.txt'),
//       val * partialResult,
//     ]);
//   })
//   .then(([val, partialResult]) => {
//     return Promise.all([
//       multiplyNumbers('./textFiles/num4.txt'),
//       val * partialResult,
//     ]);
//   })
//   .then(([val, partialResult]) => {
//     return Promise.all([
//       multiplyNumbers('./textFiles/num5.txt'),
//       val * partialResult,
//     ]);
//   })
//   .then(([val, partialResult]) => {
//     const result = partialResult * val;

//     console.log(result);
//   })
//   .catch((err) => console.log(err.message))
//   .finally(()=> {
//     console.log('All of the promises have been resolved');
//   })
