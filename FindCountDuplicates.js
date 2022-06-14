const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];

const findCountDuplicates = (arr) => {
  const result = {};
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    result[element] = result[element] + 1 || 1;
  }
  return result;
};

console.log(findCountDuplicates(arr));
