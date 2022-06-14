const rms = (name) => {
  return name
    .replace(/\.|\s|\//gi, "_")
    .replace(/\'/gi, "")
    .toLowerCase();
};

console.log(rms("Hello people/I'm a string"));
