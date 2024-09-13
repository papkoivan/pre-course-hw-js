let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk"
  }
};

const newPassportMarried = {
  ...passportWithAddress,
  married: true,
  address: {
    ...passportWithAddress.address,
  }
}

console.log(passportMarried)
console.log(newPassportMarried)
