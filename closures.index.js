function createMovieWithDetails(title,directoersName,releaseYear){
    const ratings=[];
    return{ 
         getDetails:function(){ 
            return  {title:title,directoersName:directoersName,year:releaseYear};
        },

  addRating: function(rating){
    if(rating>=1 && rating<=10 ){
    if(ratings.length<10){
        ratings.push(rating);}
    else{console.log("Maximum number of ratings reached!");}
}
},

getAverageRating: function(){
    if (ratings.length===0){
        return 0}
        else{const sum=ratings.reduce((acc,curr)=>acc+curr,0);
            return sum/ratings.length;}

    }
}
    }
let titanic = createMovieWithDetails("Titanic", "James Cameron", 1997);
console.log(titanic.getDetails());
titanic.addRating(8);
titanic.addRating(9);
titanic.addRating(7);
console.log(titanic.getAverageRating());


function createMovieDatabase(){
    let movies=[];
    return{
        addMovie:function(title,directoersName,releaseYear){
            const newMovie=createMovieWithDetails(title,directoersName,releaseYear);
                movies.push(newMovie.getDetails());
        },
        findMovieByTitle :function(title){
            return movies.find(movie=>movie.title===title);
        },
        getAverageRatingOfAllMovies:function() {
            if (movies.length === 0) {
              return 0;
            } else {
              const totalRatingsSum = movies.reduce((sum, movie) => sum + movie.getAverageRating(), 0);
              return totalRatingsSum / movies.length;
            }}
    }
}
const myDatabase=createMovieDatabase();
myDatabase.addMovie("Titanic", "James Cameron", 1997);
myDatabase.addMovie("Inception", "Christopher Nolan", 2010);
let foundMovie = myDatabase.findMovieByTitle("Titanic");
console.log(foundMovie)
console.log(getAverageRatingOfAllMovies());