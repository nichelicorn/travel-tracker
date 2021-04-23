const userData = [
  {"id":1,"name":"River Song"},
  {"id":3,"name":"Clara Oswald"},
  {"id":7,"name":"Rose Tyler",},
  {"id":13,"name":"Bill Potts"},
  {"id":"agent","name":"The Doctor"}
];

const travelerData = [
  {"id":1,"name":"River Song","travelerType":"history buff"},
  {"id":3,"name":"Clara Oswald","travelerType":"thrill-seeker"},
  {"id":7,"name":"Rose Tyler","travelerType":"thrill-seeker"},
  {"id":13,"name":"Bill Potts","travelerType":"relaxer"}
];

const agentData = [
  {"id":"agent","name":"The Doctor"}
];

const trips = [
  {"id":1,"userID":1,"destinationID":1,"travelers":1,"date":"2019/09/16","duration":8,"status":"approved","suggestedActivities":[]},
  {"id":2,"userID":3,"destinationID":2,"travelers":5,"date":"2020/10/04","duration":18,"status":"pending","suggestedActivities":[]},
  {"id":3,"userID":7,"destinationID":3,"travelers":4,"date":"2020/05/22","duration":17,"status":"pending","suggestedActivities":[]},
  {"id":4,"userID":13,"destinationID":4,"travelers":2,"date":"2020/02/25","duration":10,"status":"approved","suggestedActivities":[]},
  {"id":5,"userID":1,"destinationID":5,"travelers":3,"date":"2020/04/30","duration":18,"status":"approved","suggestedActivities":[]},
  {"id":6,"userID":3,"destinationID":6,"travelers":3,"date":"2020/06/29","duration":9,"status":"pending","suggestedActivities":[]},
  {"id":7,"userID":7,"destinationID":6,"travelers":5,"date":"2020/5/28","duration":20,"status":"approved","suggestedActivities":[]},
  {"id":8,"userID":13,"destinationID":4,"travelers":6,"date":"2021/02/07","duration":4,"status":"approved","suggestedActivities":[]},
  {"id":9,"userID":1,"destinationID":2,"travelers":5,"date":"2019/12/19","duration":19,"status":"pending","suggestedActivities":[]},
  {"id":10,"userID":3,"destinationID":5,"travelers":6,"date":"2020/07/23","duration":17,"status":"approved","suggestedActivities":[]},
  {"id":11,"userID":7,"destinationID":3,"travelers":4,"date":"2020/10/14","duration":4,"status":"approved","suggestedActivities":[]},
  {"id":12,"userID":13,"destinationID":1,"travelers":6,"date":"2020/10/17","duration":6,"status":"pending","suggestedActivities":[]},
];

const destinations = [
  {"id":1,
  "destination":"The Singing Towers of Darillium",
  "estimatedLodgingCostPerDay":70,
  "estimatedFlightCostPerPerson":400,
  "image":"https://static.wikia.nocookie.net/tardis/images/d/d8/The_Singing_Towers_of_Darillium.jpg/revision/latest/scale-to-width-down/1000?cb=20151226000808",
  "alt":"A desert scene at sunset. There are mountains in the distance, and the sky is reflecting orange light in the sunset. There are two tall stone towers casting long shadows across the darkening sand."},
  {"id":2,
  "destination":"Trenzalore",
  "estimatedLodgingCostPerDay":100,
  "estimatedFlightCostPerPerson":780,
  "image":"https://static.wikia.nocookie.net/tardis/images/f/f6/Trenzalore_planet.jpg/revision/latest/scale-to-width-down/400?cb=20170425122412",
  "alt":"A view of a cloudy blue planet, surrounded by several rocky rings. In the distance is a bright yellow star, and two moons are held in orbit around the planet."},
  {"id":3,
  "destination":"The Moon",
  "estimatedLodgingCostPerDay":130,
  "estimatedFlightCostPerPerson":950,
  "image":"https://static.wikia.nocookie.net/tardis/images/a/a1/Courtney_uses_Tumblr.jpg/revision/latest/scale-to-width-down/935?cb=20141005190420",
  "alt":"A hand holding a phone, looking at a social media app. The app is displaying a headline with the name Courtney, and an image of a man in an orange space suit standing on the moon."},
  {"id":4,
  "destination":"Pete's World, aka Earth in another Universe",
  "estimatedLodgingCostPerDay":65,
  "estimatedFlightCostPerPerson":350,
  "image":"https://static.wikia.nocookie.net/tardis/images/4/46/Pete%27s_World.jpg/revision/latest/scale-to-width-down/1000?cb=20090110102822",
  "alt":"A strange view of London. There are several airships in the sky, traveling in various directions."},
  {"id":5,
  "destination":"Gallifrey",
  "estimatedLodgingCostPerDay":150,
  "estimatedFlightCostPerPerson":650,
  "image":"https://static.wikia.nocookie.net/tardis/images/b/b7/The_Citadel.jpg/revision/latest/scale-to-width-down/960?cb=20100216140030",
  "alt":"A city residing in a transparent bubble, nested in the desert. The city bubble is surrounded by sandy hills, and the setting sun casts a glow over the orange sky."},
  {"id":6,
  "destination":"Chasm Forge",
  "estimatedLodgingCostPerDay":70,
  "estimatedFlightCostPerPerson":890,
  "image":"https://static.wikia.nocookie.net/tardis/images/b/b9/Chasm_Forge.jpg/revision/latest/scale-to-width-down/800?cb=20170513224328",
  "alt":"A space station, with a central hub and two ring structures surrounding the hub. There is a small hub at the edge of the outer ring. The sky is dark and void of stars."}
];
