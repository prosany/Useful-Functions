export const numberWithSingleInvertedComma = (xx) => {
  if (xx) {
    let split_string = xx.split(/(\d+)/);
    const c = split_string[0];
    let x = split_string[1];
    let y = split_string[2];
    let z = split_string[3] ? split_string[3] : "";

    x = String(x).toString();
    var afterPoint = "";
    if (x.indexOf(".") > 0) afterPoint = x.substring(x.indexOf("."), x.length);
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "'" + lastThree;
    return (
      c +
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, "'") +
      lastThree +
      afterPoint +
      y +
      z
    );
  }
};
