import { expect } from "chai";

import Agent from "../src/Agent.js";
import Traveler from "../src/Traveler.js"
import { agentData, travelerData } from "../test/test-data.js";
// import { travelerData } from "../test/test-data.js"; // this seems like it may be redundant - can agentData and travelerData be imported in one line?

let agent, traveler1;

describe("The Agent class", () => {

  beforeEach(() => {
    agent = new Agent(agentData[0]);
    traveler1 = new Traveler(travelerData[0]);
  })

  describe("The Agent properties", () => {
    it("should inherit an id from the User class", () => {
      expect(agent.id).to.equal("agent");
    })

    it("should inherit a name from the User class", () => {
      expect(agent.name).to.equal("The Doctor")
    })

    it("should inherit a userName from the User class", () => {
      expect(agent.userName).to.equal("agent");
    })

    it("should inherit a password from the User class", () => {
      expect(agent.password).to.equal("travel2020");
    })

  })

})
