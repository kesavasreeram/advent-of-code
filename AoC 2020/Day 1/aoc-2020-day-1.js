const fs = require('fs');

const solution = () => {
  fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(`Reading input file failed with error: ${err.message}`);
    } else {
      try {
        const memMap = {};
        let result = null;
        const tokens = data.split('\n').map(x => parseInt(x, 10));
        for (const n of tokens) {
          if (memMap[2020-n]) {
            result = n*(2020-n);
            break;
          } else {
            memMap[n] = 1;
          }
        }
        console.log(result);
      } catch (error) {
        console.log(`Computing solution failed with error: ${err.message}`);
      }
    }
  });
};

solution();
