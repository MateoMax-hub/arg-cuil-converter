function dniConverter(dni, gender) {
  let newCompleteStr = "27";
  let completeDni = dni;
  if (gender === "male") newCompleteStr = "20";
  if (dni?.length === 7) completeDni = `0${dni}`;
  newCompleteStr += completeDni;
  let multiplicationsResult = 0;
  for (let i = 0; i < newCompleteStr.length; i++) {
    const element = parseFloat(newCompleteStr.charAt(i));
    let multiplicationResult = 0;
    switch (i) {
      case 0:
        multiplicationResult = element * 5;
        break;
      case 1:
        multiplicationResult = element * 4;
        break;
      case 2:
        multiplicationResult = element * 3;
        break;
      case 3:
        multiplicationResult = element * 2;
        break;
      case 4:
        multiplicationResult = element * 7;
        break;
      case 5:
        multiplicationResult = element * 6;
        break;
      case 6:
        multiplicationResult = element * 5;
        break;
      case 7:
        multiplicationResult = element * 4;
        break;
      case 8:
        multiplicationResult = element * 3;
        break;
      case 9:
        multiplicationResult = element * 2;
        break;
      default:
        break;
    }
    multiplicationsResult += multiplicationResult;
  }
  let finalCuil = "";
  const leftover = multiplicationsResult % 11;
  if (leftover === 0) finalCuil = `${newCompleteStr}0`;
  if (leftover === 1 && gender === "male") finalCuil = `23${completeDni}9`;
  if (leftover === 1 && gender === "female")
    finalCuil = `23${completeDni}4`;
  if (leftover !== 1 && leftover !== 0)
  finalCuil = newCompleteStr + (11 - leftover);
  return finalCuil;
};

module.exports = dniConverter;
