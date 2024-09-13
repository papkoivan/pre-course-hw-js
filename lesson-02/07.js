let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk"
  }
};

const newPassport = {
  ...passportWithAddress,
  married: true,
  address: {
    ...passportWithAddress.address,
  }
}

console.log(passportWithAddress)
console.log(newPassport)
