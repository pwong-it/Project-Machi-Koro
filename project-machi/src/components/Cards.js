// Establishment Cards
const B1 = {
  name: "Wheat Field",
  activationNum: 1,
  cost: 1,
  effect: 1,
  isEstablishment: true
}

const B2 = {
  name: "Ranch",
  activationNum: 2,
  cost: 2,
  effect: 1,
  isEstablishment: true
}

const B3 = {
  name: "Cafe",
  activationNum: 3,
  cost: 2,
  effect: 1,
  isEstablishment: true
}

// Landmark Cards
const LandmarkTrain = {
  name: "Train Station",
  cost: 5,
  effect: "Landmark",
  isEstablishment: false
}

const LandmarkShop = {
  name: "Shopping Mall",
  cost: 7,
  effect: "Landmark",
  isEstablishment: false
}

const cards = [LandmarkTrain, LandmarkShop, B1, B2, B3]

export { cards }