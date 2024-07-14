export const toCapitalizeCase = (str: string) =>
  str[0].toUpperCase() + str.slice(1);

export const removeUndercheckSymbol = (str: string) => str.split("_").join(" ");
