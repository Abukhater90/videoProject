//Exercise 1: The Media superclass
class Media{
    constructor(title,duration){
        this.title=title;
        this.duration=duration;
        this.ratings=[];
 
    }

    addRating(rating){
    return this.ratings.push(rating);
    }

    calculateAverageRating(){
        if(this.ratings.length === 0){
            return 'No ratings yet';
            
        }
        let sum=this.ratings.reduce((sum,rating) => sum + rating,0)
        let averageRating=sum/this.ratings.length;
        return averageRating.toFixed(2);
    }
    displayDetails(){
        return `Title: ${this.title}, Duration: ${this.duration} , Average Rating:${this.calculateAverageRating()}`;
    }
}
//Exercise 2: The Movie and Series subclasses
class Movie extends Media {
   constructor (title, duration, director, genre){
   super(title, duration);
   this.director= director;
   this.genre= genre;
   }

 displayDetails(){
    return ` ${super.displayDetails()}, Director: ${this.director} ,Genre:${this.genre}`;}
}

class Series extends Media{
    constructor (title, duration, seasons){
        super(title, duration);
        this.seasons= seasons;  
    }
    displayDetails(){
        return ` ${super.displayDetails()}, Seasons: ${this.seasons} `;}
}
// Create some media
console.log("Creating media");
const movie = new Movie("Inception", "2 hours 28 minutes", "Christopher Nolan", "Science fiction");
const series = new Series("Breaking Bad", "45 minutes per episode", 5);
console.log(movie.displayDetails());
console.log(series.displayDetails());

//Exercise 3: The User class
class User {
    constructor(username){
        this.username = username;
        this.watchedMedia = [];
    }
    addMedia(media) {
    this.watchedMedia.push(media)
    }

    rateMedia(media,rating){
    if(this.watchedMedia.includes(media)){
        media.addRating(rating)
    }
     else{ return `user can only rate media they've watched.`;}
   
    }

    displayWatchedMedia (){
        let mediaDetailsArray = [];
        for (let i = 0; i < this.watchedMedia.length; i++) {
            mediaDetailsArray.push( this.watchedMedia[i].displayDetails());
        }
        return  mediaDetailsArray.join(' ');
    }
}
// Create a user
console.log("Creating user");
const user = new User("Alice");
console.log(`User: ${user.username}`);

// Add media to the user's watched list
console.log("Adding media to watched list");
user.addMedia(movie);
user.addMedia(series);
console.log(user.displayWatchedMedia());

// Rate some media
console.log("Rating media");
user.rateMedia(movie, 5);
user.rateMedia(series, 4);
console.log(user.displayWatchedMedia());

// Show average rating of media
console.log("Average Ratings");
console.log(movie.calculateAverageRating());
console.log(series.calculateAverageRating());

// Try to rate a media that the user hasn't watched
console.log("Try to rate unwatched media");
const unwatchedMovie = new Movie("Unwatched Movie", "2 hours", "Unknown Director", "Unknown Genre");
console.log(user.rateMedia(unwatchedMovie, 3));