const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];

const findUniqueValues = (arr) => {
  const result = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (result.indexOf(element) === -1) {
      result.push(element);
    }
  }
  return result.sort((a, b) => a - b);
};

console.log(findUniqueValues(arr));
