import { expect } from "chai";

import User from "../src/User.js";
import { userData } from "../test/test-data.js";
import { tripData } from "../test/test-data.js"

let user1, user3, user7, user13, agent;

describe("The User class", () => {

  beforeEach(() => {
    user1 = new User(1, "River Song");
    user3 = new User(3, "Clara Oswald");
    user7 = new User(7, "Rose Tyler");
    user13 = new User(13, "Bill Potts");
    agent = new User("agent", "The Doctor");
  })

  describe("The User properties", () => {
    // it should be an instance of a User
    it("should instantiate a new User", () => {
      expect(user1).to.be.an.instanceof(User);
    })
    // it should have an id
    // id can be a number or string
    it("should have an id", () => {
      expect(user1.id)to.equal(1);
      expect(agent.id)to.equal("agent");
    })
    // it should have a name
    // name should be a string
    it("should have a name", () => {
      expect(user3.name).to.equal("Clara Oswald");
      expect(user7.name).to.equal("Rose Tyler");
    })
    // it should have a userName
    // userName should be a string
    // userName should be created by concatenating "traveler" + their id number
    it("should have a userName", () => {
      expect(user13.userName).to.equal("traveler13");
      expect(agent.userName)to.equal("agent");
    })
    // it should have a password
    // password should be a string
    it("should have a password", () => {
      expect(user7.password).to.equal("traveler2020");
    })
  })
  // it should have a method to view trips
  describe("A method to view trips", () => {
    it("should be a method", () => {
      expect(user1.viewTrip).to.be.a(function);
    })

    it("should be able to select trips from the past", () => {
      // this method should return a trip from the past
      // should be able to select past trips
      let pastTrip = user1.viewTrip("2019/09/16");

      expect(pastTrip).to.deep.equal({
        "id":1,
        "userID":1,
        "destinationID":1,
        "travelers":1,
        "date":"2019/09/16",
        "duration":8,
        "status":"approved",
        "suggestedActivities":[]
      })
    })
    // should be able to select present trips
    it("should be able to select trips a user is currently on", () => {
      let presentTrip = user7.viewTrip("2020/10/14");

      expect(presentTrip).to.deep.equal({
        "id":11,
        "userID":7,
        "destinationID":3,
        "travelers":4,
        "date":"2020/10/14",
        "duration":4,
        "status":"approved",
        "suggestedActivities":[]
      })
    })
    // should be able to select future trips (approved trips)
    // should be able to select pending trips



  })

})



// it should have a method to track spending
  // should be able to return past trip spending
  // should be able to return present trip spending
  // should be able to return future trip spending (approved trips)
  // should be able to calculate cost for pending trips
  // should be able to calculate 10% agent fee for all of the above
