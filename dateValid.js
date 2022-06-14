const Expired = (time) => {
  if (Date.now() >= new Date(time).getTime()) {
    return true;
  } else {
    return false;
  }
};

console.log(new Date());
console.log(Expired("2022-06-05"));
