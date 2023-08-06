

1.//////////////////////////////////////////////////
// function getMovies(movies)(){   }

const getMovies = movies => movie => movie.title ;











2.//////////////////////////////////////////////////
// function averageMovieRating (){   }
const averageMovieRating =  (rating) => { if (rating > 7) {
 return "Good";
 } else if (rating > 5) {
 return "Average";
 } else {
 return "Bad";
 }
 };

 console.log(averageMovieRating(5));


3.//////////////////////////////////////////////////
 // function getTotalMovieLength(movies) {}
const getTotalMovieLength = (movies) => {  let totalLength = 0;
 for (let i = 0; i < movies.length; i++) {
 totalLength += movies[i].length;
 }
 return 'Total movie length is ' + totalLength + ' minutes';

};



4.//////////////////////////////////////////////////
// function getMovieTitles(movies){}
const getMovieTitles = (movies) => {
return movies.map(function(movie) {
 return movie.title;
 });
}

