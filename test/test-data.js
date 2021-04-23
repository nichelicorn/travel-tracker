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
  {"id":1,"destination":"The Singing Towers of Darillium","estimatedLodgingCostPerDay":70,"estimatedFlightCostPerPerson":400,"image":"https://static.wikia.nocookie.net/tardis/images/d/d8/The_Singing_Towers_of_Darillium.jpg/revision/latest/scale-to-width-down/1000?cb=20151226000808","alt":"A desert scene at sunset. There are mountains in the distance, and the sky is reflecting orange light in the sunset. There are two tall stone towers casting long shadows across the darkening sand."},
  {"id":2,"destination":"Stockholm, Sweden","estimatedLodgingCostPerDay":100,"estimatedFlightCostPerPerson":780,"image":"https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80","alt":"city with boats on the water during the day time"},
  {"id":3,"destination":"Sydney, Austrailia","estimatedLodgingCostPerDay":130,"estimatedFlightCostPerPerson":950,"image":"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80","alt":"opera house and city buildings on the water with boats"},
  {"id":4,"destination":"Cartagena, Colombia","estimatedLodgingCostPerDay":65,"estimatedFlightCostPerPerson":350,"image":"https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80","alt":"boats at a dock during the day time"},
  {"id":5,"destination":"Madrid, Spain","estimatedLodgingCostPerDay":150,"estimatedFlightCostPerPerson":650,"image":"https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80","alt":"city with clear skys and a road in the day time"},
  {"id":6,"destination":"Jakarta, Indonesia","estimatedLodgingCostPerDay":70,"estimatedFlightCostPerPerson":890,"image":"https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80","alt":"lit up city at night"}
]
