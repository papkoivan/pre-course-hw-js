let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk"
  }
};

const newPassportMarried = {
  ...passportMarried,
  married: true,
  address: {
    ...passportMarried.address,
  }
}

console.log(passportMarried)
console.log(newPassportMarried)
