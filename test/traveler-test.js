import { expect } from "chai";

import Traveler from "../src/Traveler.js";
import { travelerData } from "../test/test-data.js";

let traveler1, traveler3, traveler7, traveler13;

describe("The Traveler class", () => {

  beforeEach(() => {
    traveler1 = new Traveler(travelerData[0]);
    traveler3 = new Traveler(travelerData[1]);
    traveler7 = new Traveler(travelerData[2]);
    traveler13 = newTraveler(travelerData[3]);
  })

    

})

// it should inherit the User class properties/methods

// test outcomes of inherited properties and methods

// TRAVELER PROPERTIES
// it should have a property travelerType
// it should have a property trips [] - this will store a user's trips
// it should have a property amt spent 0

// it should have a method to request a new trip (instantiate a new Trip)
  // must be able to select:
    // date
    // duration
    // # of travelers
    // destination
    // est total cost
    // 10% agent fee
