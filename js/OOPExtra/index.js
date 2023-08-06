////////////////////////////////
///Advanced Movie Rating System using ES6 Classes & OOP Principles
//Abstraction:
class Movie {
  // CR - for real private properties - you add them before the constructor, this way
  //  #ratings;
  // and then define them in the constructor
  
  constructor(title, releaseYear, genre) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this._ratings = [];
  }

  addRating(rating) {
    if (typeof rating !== "number") {
      return "rating must be number.";
    }
    if (rating < 1 || rating > 5) {
      return "rating must be between 1 and 5";
    }
    this._ratings.push(rating);
  }

  getAverageRating() {
    if (this._ratings.length === 0) {
      return "No ratings yet";
    }
    if (this._ratings.length === 0) { // CR - delete this - duplicate
    }
    let sum = this._ratings.reduce((sum, rating) => sum + rating, 0);
    let averageRating = sum / this._ratings.length;
    return averageRating; // CR - Could be just "return this._ratings.reduce((sum, rating) => sum + rating, 0) / this._ratings.length;"
  }

  displayDetails() {
    return `Title: ${this.title}, Release Year: ${this.releaseYearn} , Genre:${this.genre}`;
  }
  typeOfMovie() {
    return "This is a standard movie.";
  }
}
class Series extends Movie {
  constructor(title, releaseYear, genre, numberOfEpisodes) {
    super(title, releaseYear, genre);
    this.numberOfEpisodes = numberOfEpisodes;
  }
  displayDetails() {
    /* CR - Should be like this:
        super.displayDetails();
        console.log(`Number of Episodes: ${this.numberOfEpisodes}`);
    */
    return `Title: ${this.title}, Release Year: ${this.releaseYearn} , Genre:${this.genre} , Number Of Epside: ${this.numberOfEpisodes}`;
  }
  typeOfMovie() {
    return "This is a Series.";
  }
}
class Documentary extends Movie {
  constructor(title, releaseYear, genre, topic) {
    super(title, releaseYear, genre);
    this.topic = topic;
  }

  displayDetails() {
    /*
      CR- should be:
      super.displayDetails();
      console.log(`Topic: ${this.topic}`);
    */
    return `Title: ${this.title}, Release Year: ${this.releaseYearn} , Genre:${this.genre} , Topic: ${this.topic}`;
  }
  typeOfMovie() {
    return "This is a  documentary.";
  }
}

// ----- Tasks -----
// 1. Implementation
const avengers = new Movie("Avengers: Endgame", 2019, "Action");
avengers.addRating(5);
avengers.addRating(4);

const strangerThings = new Series("Stranger Things", 2016, "Horror", 25);
strangerThings.addRating(5);

const ourPlanet = new Documentary("Our Planet", 2019, "Nature");
ourPlanet.addRating(4.5);

// 2. Demonstration
const moviesList = [avengers, strangerThings, ourPlanet];
moviesList.forEach((movie) => {
  movie.displayDetails();
  console.log(movie.typeOfMovie());
  console.log(`Average Rating: ${movie.getAverageRating()}`);
  console.log("-----------------------");
});

/*const netflix = new StreamingPlatform();
netflix.addMovie(avengers);
netflix.addMovie(strangerThings);
netflix.addMovie(ourPlanet);
console.log(`Overall platform rating: ${netflix.overallAverageRating()}`);

// Ensure to maintain code clarity, comment where necessary, and refactor any repetitive segments.*/
