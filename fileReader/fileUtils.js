const fs = require('fs');

function readFileWrapper(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }else {
        resolve(data);
      }
    });
  });
}

readFileWrapper('./textFiles/file1.txt')
  .then(val=> {
    console.log(val);

    return readFileWrapper('./textFiles/file2.txt');
  })
  .then(val=> {
    console.log(val);

    return readFileWrapper('./textFiles/file3.txt');
  })
  .then(val=> console.log(val));