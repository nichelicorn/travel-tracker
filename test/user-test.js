import { expect } from "chai";

import User from "../src/User.js";
import { userData } from "../test/test-data.js";

let user1, user3, user7, user13, agent;

describe("The User class", () => {

  beforeEach(() => {
    user1 = new User(1, "River Song");
    user3 = new User(3, "Clara Oswald");
    user7 = new User(7, "Rose Tyler");
    user13 = new User(13, "Bill Potts");
    agent = new User("agent", "The Doctor");
  });

  describe("The User properties", () => {
    // it should be an instance of a User
    it("should instantiate a new User", () => {
      expect(user1).to.be.an.instanceof(User);
    });

    
  });



});


// it should have an id
  // id can be a number or string

// it should have a name
  // name should be a string

// it should have a userName
  // userName should be a string
  // userName should be created by concatenating "traveler" + their id number

// it should have a password
  // password should be a string

// it should have a method to view trips
  // should be able to select past trips
  // should be able to select present trips
  // should be able to select future trips (approved trips)
  // should be able to select pending trips

// it should have a method to track spending
  // should be able to return past trip spending
  // should be able to return present trip spending
  // should be able to return future trip spending (approved trips)
  // should be able to calculate cost for pending trips
  // should be able to calculate 10% agent fee for all of the above
