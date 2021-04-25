import { expect } from "chai";

import Traveler from "../src/Traveler.js";
import { travelerData } from "../test/test-data.js";

let traveler1, traveler3, traveler7, traveler13;

describe("The Traveler class", () => {

  beforeEach(() => {
    console.log("traveler data >>> ", travelerData); // undefined
    traveler1 = new Traveler(travelerData[0]);
    traveler3 = new Traveler(travelerData[1]);
    traveler7 = new Traveler(travelerData[2]);
    traveler13 = new Traveler(travelerData[3]);
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
    // it should have a property trips [] - this will store a user's trips -- need a method to pull all user trips into an array
    // will want this method to pull all trips into an array based on the traveler's id
    it("should store a traveler's trips", () => {
      expect(traveler1.allTrips[0].destinationID).to.equal(1);
      expect(traveler3.allTrips[0].date).to.equal("2020/10/04");
    })
    // it should have a property amt spent 0 -- need a method to calculate trip  cost based on destination
    // might need an additional method to create this outcome
    it("should store a traveler's total amount spent", () => {
      expect(traveler3.totalSpent).to.equal(16180);
    })
  })

  describe("Methods inherited from the User class", () => {
    it("should have a method to view trips", () => {
      let testTrip = user3.viewTrip("2020/10/17");

      expect(testTrip.status).to.equal("pending");
    })

    it("should have a method to view spending", () => {
      let tripCost= user5.viewTripCost("2020/04/30");

      expect(tripCost).to.equal(2514);
    })
  })
  // it should have a method to request a new trip (instantiate a new Trip)
  // must be able to select:
  // date
  // duration
  // # of travelers
  // destination
  // est total cost
  // 10% agent fee
  describe("A method to request a new trip", () => {
    it("should instantiate a new Trip", () => {
      let pendingTrip = new Trip(13, 1, 2, "2020/12/31", 14); // 13 is the userID, 1 is the destinationID, 2 is the number of travelers, then the date, and 14 is the duration
      expect(user13.requestTrip()).to.return({
        "id":13,
        "userID":13,
        "destinationID":1,
        "travelers":2,
        "date":"2020/12/31",
        "duration":14,
        "status":"pending",
        "suggestedActivities":[]
      })
    })
  })
})
// test outcomes of inherited properties and methods
