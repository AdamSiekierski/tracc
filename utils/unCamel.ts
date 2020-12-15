export const unCamel = (str) => str.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())
