const ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

const findMaximumNumber = (arr) => {
  const result = {};
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    result[element] = result[element] + 1 || 1;
  }
  return result;
};

console.log(findMaximumNumber(ar));
