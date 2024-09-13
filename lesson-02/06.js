let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA"
  }
};

const newPassport = {
  ...passportWithAddress,
  address: {
    ...passportWithAddress.address,
    city: "Bobryisk",
  }
}

console.log(passportWithAddress.address.city)
console.log(newPassport.address.city)
