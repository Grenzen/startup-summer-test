export const calculate = (number) => {
  const reg = /[0-9]{1,3}.\d/
  let midStr = ''
  if (number >= 1000 && number < 1000000) {
    midStr = extract(number, 1000, reg);
    return midStr = `${midStr}k`
  } else if (number >= 1000000 && number < 1000000000) {
    midStr = extract(number, 1000000, reg);
    return midStr = `${midStr}m`
  } else {
    return number
  }
}

const extract = (number, divider, reg) => `${number/divider}`.match(reg)[0]