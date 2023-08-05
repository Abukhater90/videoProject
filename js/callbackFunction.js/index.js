//Exercise 1: Uppercase Movie Genre
function convertToUpperCase(movie, callback) {
    if (!movie.genre) {
      console.log("This movie doesn't have a genre")
    } else {
      movie.genre = callback(movie.genre)
      console.log(movie)
    }
  }
  
  let myMovie = { title: "Movie 1", genre: "action" }; 
  convertToUpperCase(myMovie, genre => genre.toUpperCase())



  //Exercise 2: Check if Rating is Number
  function isNumber(num) {
    return typeof num === 'number';
  }
  function checkifRatingisNumber(movie, callback) {
    if (!movie.rating) {
      console.log("there is no rating")
    } else {

      if( callback(movie.rating)){
        console.log(`Movie 1 has a numerical rating of ${movie.rating}`)
                                 }
    }
  }
   myMovie=  { title: "Movie 1", rating: 8 }; 
   checkifRatingisNumber(myMovie, isNumber)


   //Exercise 3: Add Exclamation to Movie Title
   function addExclamation(title) {
    return title=`${title}!`;
  }
  
  function addExclamationtoMovieTitle(movie, callback) {
        movie.title=callback(movie.title);
        console.log(movie)           
                                      }

   myMovie=  { title: "Movie 1", rating: 8 }; 
   addExclamationtoMovieTitle(myMovie, addExclamation)

   //Exercise 4: Reverse Words in Movie Description

 function reverseWords(description) {
    return description.split(' ').reverse().join(' ');
                                    }

function  reverseWordsInMovieDescription(movie,callback) {
    movie.description=callback(movie.description);
    console.log(movie)           
                                  }
    myMovie={ title: "Movie 1", description: "An exciting action thriller" };                            
    reverseWordsInMovieDescription(myMovie,reverseWords)

    
const movie1 = {
  id: 2,
  title: "Movie title 1",
  genres: ["Genre1", "Genre2"],
  ratings: [8, 7, 10]
};

const movie2 = {
  id: 3,
  title: "Movie title 2",
  genres: ["Genre1", "Genre2"],
  ratings: [8, 7, 10]
};

const movie3 = {
  id: 5,
  title: "Movie title 3",
  genres: ["Genre1", "Genre2"],
  ratings: [8, 7, 10]
};

const movie4 = {
  id: 5,
  title: "Movie title 4",
  genres: ["Genre1", "Genre2"],
  ratings: [8, 7, 10]
};

const moviesArr = [movie1, movie2, movie3, movie4]

function processMovies(movies, cb) {
  if (!Array.isArray(movies)) {
    throw new Error('Expected an array');
  }

  const newMovies = JSON.parse(JSON.stringify(movies));

  for (let i = 0; i < newMovies.length; i++) {
    if (newMovies[i].hasOwnProperty('title') && newMovies[i].hasOwnProperty('genres') && newMovies[i].hasOwnProperty('ratings')) {

      newMovies[i] = cb(newMovies[i]);
    } else {
      throw new Error('Movie is not in the right structure');
    }
  }

  return newMovies;
}

const newMovies = processMovies(moviesArr, (movie) => {
  return {
    ...movie,
    title: movie.title.toUpperCase(),
    reviews: []
  }
})
console.log('---------------------------')
console.log(moviesArr)
console.log('---------------------------')
console.log(newMovies)

function processMovie(movie, cb) {
  if (typeof movie !== "object") {
    throw new Error('Expected a movie object');
  }

  if (movie.hasOwnProperty('title') && movie.hasOwnProperty('genres') && movie.hasOwnProperty('ratings')) {
    const newMovie = JSON.parse(JSON.stringify(movie));

    return cb(newMovie);
  } else {
    throw new Error('Movie is not in the right structure');
  }
}

function addReviewsArr(movie) {
  return {
    ...movie,
    reviews: []
  };
}

const processedMovie = processMovie(movie1, addReviewsArr);
