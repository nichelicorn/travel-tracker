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

  describe("The Traveler properties", () => {
    // it should inherit the User class properties/methods
    it("should inherit an id from the User class", () => {
      expect(traveler13.id).to.equal(13);
    })

    it("should inherit a name from the User class", () => {
      expect(traveler1.name).to.equal("River Song");
    })

    it("should inherit a userName from the User class", () => {
      expect(traveler7.userName).to.equal("traveler7");
    })

    it("should inherit a password from the User class", () => {
      expect(traveler3.password).to.equal("traveler3");
    })
    // it should have a property travelerType
    it("should describe the type of traveler a user is", () => {
      expect(traveler7.travelerType).to.equal("thrill-seeker");
      expect(traveler1.travelerType).to.equal("history buff");
    })
    // it should have a property trips [] - this will store a user's trips

  })

})
// test outcomes of inherited properties and methods

// TRAVELER PROPERTIES
// it should have a property amt spent 0

// it should have a method to request a new trip (instantiate a new Trip)
  // must be able to select:
    // date
    // duration
    // # of travelers
    // destination
    // est total cost
    // 10% agent fee
