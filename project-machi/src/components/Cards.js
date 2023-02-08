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
  cost: 1,
  effect: 1,
  isEstablishment: true
}

const B3 = {
  name: "Apple Orchard",
  activationNum: 3,
  cost: 3,
  effect: 3,
  isEstablishment: true
}

const B4 = {
  name: "Flower Orchard",
  activationNum: 4,
  cost: 2,
  effect: 1,
  isEstablishment: true
}

const B5 = {
  name: "Forest",
  activationNum: 5,
  cost: 3,
  effect: 1,
  isEstablishment: true
}

const B6 = {
  name: "Mine",
  activationNum: 6,
  cost: 6,
  effect: 5,
  isEstablishment: true
}

// Landmark Cards
const LandmarkTrain = {
  name: "Train Station",
  cost: 4,
  effect: "Landmark",
  isEstablishment: false
}

const LandmarkShop = {
  name: "Shopping Mall",
  cost: 10,
  effect: "Landmark",
  isEstablishment: false
}

const cards = [LandmarkTrain, LandmarkShop, B1, B2, B3, B4, B5, B6]

export { cards }