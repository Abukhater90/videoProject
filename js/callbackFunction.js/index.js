//Exercise 1: Uppercase Movie Genre
function convertToUpperCase(movie, callback) {
    if (!movie.genre) {
      console.log("This movie doesn't have a genre")
    } else {
      movie.genre = callback(movie.genre)
      console.log(movie)
    }
  }
  
  let movie1 = { title: "Movie 1", genre: "action" }; 
  convertToUpperCase(movie1, genre => genre.toUpperCase())



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
   movie1=  { title: "Movie 1", rating: 8 }; 
   checkifRatingisNumber(movie1, isNumber)


   //Exercise 3: Add Exclamation to Movie Title
   function addExclamation(title) {
    return title=`${title}!`;
  }
  
  function addExclamationtoMovieTitle(movie, callback) {
        movie.title=callback(movie.title);
        console.log(movie)           
                                      }

   movie1=  { title: "Movie 1", rating: 8 }; 
   addExclamationtoMovieTitle(movie1, addExclamation)

   //Exercise 4: Reverse Words in Movie Description

 function reverseWords(description) {
    return description.split(' ').reverse().join(' ');
                                    }

function  reverseWordsInMovieDescription(movie,callback) {
    movie.description=callback(movie.description);
    console.log(movie)           
                                  }
    movie1={ title: "Movie 1", description: "An exciting action thriller" };                            
    reverseWordsInMovieDescription(movie1,reverseWords)