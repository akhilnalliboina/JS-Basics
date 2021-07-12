// rest operator helps the arguments passed are converted to an array of args
const filter = (...args) => {
  return args.filter((num) => num === 1);
};

console.log(filter(1, 2, 3, 4));
