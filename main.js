const whatTheFutureHolds = {
    people: ['Bob Saget', 'Elon Musk', 'Charlie Sheen', 'Donald Trump', 'Barak Obama', 'Rick Astley', 'George Hotz',],
    places: ['Atlantis', 'New New York', 'Rapture', 'Avalon', 'ValHala', 'Mars (The Planet)', 'West Philidalphia'],
    things: ['Tower of Pisa', 'Decleration of Independence', 'Mona Lisa', 'A Plastic Fork', 'A Grizzly Bear'],
    randomPerson() {
        //Returns random person from 'people' array, no limit on array length.
        const index = Math.floor(Math.random() * this.people.length);
        return this.people[index]
    },
    randomPlace() {
        //Returns random person from 'places' array, no limit on array length.
        const index = Math.floor(Math.random() * this.places.length);
        return this.places[index]
    },
    randomThing() {
        //Returns random person from 'things' array, no limit on array length.
        const index = Math.floor(Math.random() * this.things.length);
        return this.things[index]
    },
} 



//console.log(whatTheFutureHolds.randomPerson())