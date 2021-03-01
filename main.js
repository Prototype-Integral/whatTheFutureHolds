const whatTheFutureHolds = {
    _people: ['Bob Saget', 'Elon Musk', 'Charlie Sheen', 'Donald Trump', 'Barak Obama', 'Batman', 'Rick Astley', 'George Hotz'],
    _things: ['A freshly plucked plum', 'the Decleration of Independence', 'the Mona Lisa', 'A Plastic Fork', 'A Grizzly Bear'],
    _places: ['Atlantis', 'New New York', 'Rapture', 'Avalon', 'Val-Hala', 'Mars (The Planet)', 'West Philidalphia'],
    _reasons: ['in the name of science', 'to bring about a new age of prosperity', 'just for the heck of it', 'because of an internet meme', 'for justice', 'for legal reasons'],
    //Getters and Setters for possible outcomes
    set people(person){
        if(typeof person === 'String'){this.people.push(person)}
    },
    get people(){
        return this._people
    },
    set things(thing){
        if(typeof thing === 'String'){this.things.push(thing)}
    },
    get things(){
        return this._things
    },
    set places(place){
        if(typeof place === 'String'){this.places.push(place)}
    },
    get places(){
        return this._places
    },
    set reasons(reason){
        if(typeof reason === 'String'){this.reasons.push(reason)}
    },
    get reasons() {
        return this._reasons
    },
    //Randomly selects possible outcomes
    randomizer(array) {
        //Generates random zero index number that is not longer then length of input
        return Math.floor(Math.random() * array.length)
    },
    randomPerson() {
        //Returns random person from 'people' array, no limit on array length.
        return this.people[this.randomizer(this.people)]
    },
    randomThing() {
        //Returns random person from 'things' array, no limit on array length.
        return this.things[this.randomizer(this.things)]
    },
    randomPlace() {
        //Returns random person from 'places' array, no limit on array length.
        return this.places[this.randomizer(this.places)]
    },
    randomReason() {
        //Returns random person from 'reasons' array, no limit on array length.
        return this.reasons[this.randomizer(this.reasons)]
    },
    getDate() {
        const today = new Date()
        const limit = today.getFullYear()
        const futureDate = new Date(Math.floor(Math.random() * limit) + 2000, Math.floor(Math.random() * 12), Math.floor(Math.random() * 31)).toDateString()
        return futureDate
    },
    //This section affects output
    predict() {
        //returns prediction using random elements from this object's arrays 
        console.log(`A very Interesting future awaits, On the exact date of ${this.getDate()} the person known as ${this.randomPerson()}, will be entrusted with taking ${this.randomThing()} to a mysterious land known as ${this.randomPlace()} ${this.randomReason()}.`)
    }
};
whatTheFutureHolds.predict()