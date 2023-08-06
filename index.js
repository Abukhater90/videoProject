// Relevant to string exercises 3, 4, 5, 6
let gameData = {
    player: {
      name: "Hero",
      health: 100,
      level: 1,
      location: "forest",
      inventory: ["sword", "health potion"],
    },
    monsters: [
      {
        name: "Goblin",
        health: 25,
        location: "forest",
      },
      {
        name: "Ogre",
        health: 50,
        location: "mountain",
      },
      {
        name: "Dragon",
        health: 100,
        location: "castle",
      },
      {
        name: "Witch",
        health: 30,
        location: "swamp",
      },
      {
        name: "Ghost",
        health: 15,
        location: "graveyard",
      },
    ],
  };
  
  // ex 1
  /*
  1. Character Name Capitalization: Write a function, toTitleCase(name) , that takes a
      character's name string in all lowercase and returns it in title case.
      Input: "iron warrior"
      Output: "Iron Warrior"
  */
  function toTitleCase(name) {
    return name.split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ');
  }
  
  const inputName = "the dark knight ";
  const outputName = toTitleCase(inputName);
  console.log(outputName);
  // Output: "Iron Warrior"
  
  //-----------------------------------------------------------------------------
  /*
  2. Item Search: Write a function, searchInventory(inventory, query) , that takes in an
  array of inventory item names and a string search query. The function should return a new
  array with only the items that contain the query string.
  Input: ["Iron Sword", "Healing Potion", "Steel Shield"], "Iron"
  Output: ["Iron Sword"]
  */
  function searchMovies(movies, query) {
    //the filter method It is used to create a new array containing elements from the original array that satisfy a specified condition. The filter() method does not modify the original array; instead, it returns a new array with the filtered elements.
    const result = movies.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    return result ; 
  }
    const movies = ["The Dark Knight", "Inception", "Interstellar"];
    const query = "In";
    const output = searchMovies(movies, query);
    console.log(output);
  
    //---------------------------------------------------------------------------
    /*
    3. NPC Name Format: Write a function, formatNPCName(name) , which takes an NPC's
    name in the format "last, first" and swaps it to "first last".
    Input: "Nolan, Christopher"
    Output: "Christopher Nolan"

    */
  function formatDirectorName(name){
      const [last, first] = name.split(", ");
      return `${first} ${last}`;
  }  
    const inputName1 = "Nolan, Christopher";
    const outputName1 = formatDirectorName(inputName1);
    console.log(outputName1);
    // Output: "Christopher Nolan"

    //-------------------------------------------------------------------------
    /*
    4. Movie Length: Write a function, parseDuration(duration) , that takes a string like "2h
    30min" and returns an object with the number of hours and minutes as integers.
    */
    function parseDuration(duration) {
        //Extract hours and minutes from the input string
        const [hoursPart, minutesPart] = duration.split(' ');
      
        //Convert hours and minutes to integers
        const hours = parseInt(hoursPart) || 0;
        const minutes = parseInt(minutesPart) || 0;
      
        //Return an object with the hours and minutes
        return {
          hours: hours,
          minutes: minutes
        };
      }

      const durationString = "2h 30min";
      const durationObject = parseDuration(durationString);
      console.log(durationObject); //{ hours: 2, minutes: 30 }      

//-----------------------------------------------------------------------------
    /*
    5. Movie Initials: Write a function, getMovieInitials(title) , that takes a movie title and
    returns its initials.
    */
function getMovieInitials(title){
    //Split the title into words
    const words = title.split(' ');
  
    //Get the first letter of each word
    const acronymLetters = words.map(word => word[0]);
  
    //Join the letters together to form the acronym
    const acronym = acronymLetters.join('');
  
    //Convert the acronym to uppercase (if it was all small letters )
    const acronymUppercase = acronym.toUpperCase();
  
    //Return the final acronym
    return acronym;
  }
  
  // Test the function with the input "Epic Fantasy Battle"
  const title = "The Dark Knight"  ;
  const acronym = getMovieInitials(title);
  console.log(acronym); // Output: "TDK"

  //---------------------------------------------------------------------------
  /*
  6. Concatenate Movie Details: Write a function, getMovieDetails(movie) , that takes an
  object with movie details like title, director, and genre and returns a single string that
  combines all this information.
  Input:
  { title: "Inception", director: "Christopher Nolan", genre: "Sci-Fi"
  }
  Output: "Inception, directed by Christopher Nolan, genre: Sci-Fi"
*/
function getMovieDetails(movie)
{
  console.log ("title: " + movie.title + ", "+ "directed by: " + movie.director + ", " +"genre: " + movie.genre);
}
//the movie objects 
const movieObj ={
  title : "Inception",
  director :'Christopher Nolan', 
  genre : 'Sci-Fi'
};
//calling the function with the moiveObj 
getMovieDetails(movieObj);

//-----------------------------------------------------------------------------
/*
7. Movie Slug: Write a function, createSlug(title) , that takes a movie title and returns a
URL-friendly slug.
Input: "The Dark Knight"
Output: "the-dark-knight"
*/
//using the Arrow funstion to Slug the name of the movie 
const createSlug = (title) => {
  return title
        .split(" ")//to split the words in the string into Array of words 
        .map(word => word.toLowerCase())//for making thw words in lower case 
        .join('-'); // re-adding the words together with '-' between them 
}
const Result = createSlug ('The Dark Knight'); // putting the return value in an argument 
console.log(Result);// printing the result 

//-----------------------------------------------------------------------------
/*
8. Synopsis Trimming: Write a function, trimSynopsis(synopsis, maxLength) , that
trims the movie's synopsis to a specified length without cutting off words. 
Use slice() , lastIndexOf() , and trim() .
Input:
"A thief who steals corporate secrets through the use of dreamsharing technology is given the inverse task of planting an idea
into the mind of a CEO. But his tragic past may doom the project and
his team to disaster."
, 100
Output:
"A thief who steals corporate secrets through the use of dreamsharing technology is given the inverse task of..."
*/
//-----------------------------------------------------------------------------
/*
9. Genre List: Write a function, splitGenres(genres) , that takes a string of genres
separated by commas and converts it into an array of individual genres.
Input: "Action, Adventure, Sci-Fi"
Output: ["Action", "Adventure", "Sci-Fi"]
*/
const splitGenres = (genres) =>
{
  return genres.split(',');
}
console.log(splitGenres("Action, Adventure, Sci-Fi"));
//-----------------------------------------------------------------------------
/*
10. Movie Quote Decoder: Write a function, decodeQuote(quote) , that takes an encoded
movie quote and returns the decoded version. Encode a famous quote from a movie by
replacing all vowels with numbers (e.g., "1" for "a", "2" for "e", etc.). Use replace() .
Input: "Th3 dr34m 1s r34l!" (The dream is real!)
Output: "The dream is real!"
*/
const decodeQuote = (quote) => 
{
  return quote.split(' ')
              .map(word => word
              .replace('1' , "i")
              .replace('3' , "e")
              .replace('4' , "a"))
              .join(' ') //using the join with space inside so we can separate the words in the array with space 
}
console.log(decodeQuote("Th3 dr34m 1s r34l!\n"));

//-----------------------------------------------------------------------------
/*1. Simple Arrow Function Conversion
Objective: Convert a traditional function into an arrow function.
Exercise: Given a function getMovies that returns an array of all movie titles from
your movie rating system, convert it into an arrow function.
Initial Code:
function getMovies(movies) {
 return movies.map(movie => movie.title);
}
Sure, let's change exercises 2 and 3 as per your request:
*/
console.log("THE ARROW FUNCTIONS EXC:");
const getMovies = (movies)=>
{
  return movies.map(movie => movie.title1);
}
const moviesTitles = [
  { title1: "Inception" },
  { title1: "Interstellar" },
  { title1: "The Dark Knight" }
];
 console.log(getMovies(moviesTitles));

 //----------------------------------------------------------------------------
 /*
 2. Control Flow in Arrow Functions
Objective: Understand how to use control flow statements (like if-else) in arrow
functions.
Exercise: Given a function averageMovieRating that returns a string stating
whether the average movie rating is "Good", "Average", or "Bad" based on a specific
rating. Convert this function into an arrow function.
Initial Code:
function averageMovieRating(rating) {
 if (rating > 7) {
 return "Good";
 } else if (rating > 5) {
 return "Average";
 } else {
 return "Bad";
 }
}
*/
const averageMovieRating = (rating) => {
    if(rating > 7) 
    {
        return "Good";
    } 
    else if (rating > 5) 
    {
       return "Average";
    }
    else 
    {
        return "Bad";
    }
}
console.log(averageMovieRating(10));
//-----------------------------------------------------------------------------
/*
3. Arrow Functions with Multiple Operations
Objective: Learn how to perform multiple operations in arrow functions before
returning a value.
Exercise: Given a function getTotalMovieLength that takes an array of movies,
each with a length property, calculates the total length of all movies, and returns a
string. Convert this function into an arrow function.y
Initial Code:
function getTotalMovieLength(movies) {
 let totalLength = 0;
 for (let i = 0; i < movies.length; i++) {
 totalLength += movies[i].length;
 }
 return 'Total movie length is ' + totalLength + ' minutes';
}

*/
const getTotalMovieLength = (movies) => {
  let totalLength = 0;
  for (let i = 0; i < movies.length; i++) {
  totalLength += movies[i].length;
  } 
  return 'Total movie length is ' + totalLength + ' minutes\n';
}
const moviesLength = [
  { title: 'Movie A', length: 120 },
  { title: 'Movie B', length: 90 },
  { title: 'Movie C', length: 150 },
  { title: 'Movie D', length: 65 },
  { title: 'Movie E', length: 81 },
  { title: 'Movie F', length: 230 },
];

console.log(getTotalMovieLength(moviesLength)) ;

//-----------------------------------------------------------------------------
/*
4. Arrow Functions as Callbacks
Objective: Understand how arrow functions can be used as callbacks.
Exercise: Your rating system sorts movies by their average ratings before displaying.
Currently, it uses a traditional function for sorting. Convert this sorting function into an
arrow function.
Initial Code:
const sortedMovies = movies.sort(function(a, b) {
 return b.averageRating - a.averageRating;
});

*/
const sortedMovies = movies.sort((a, b) => b.averageRating - a.averageRating);

//-----------------------------------------------------------------------------
/*
5. Implicit Return with Arrow Functions
Objective: Understand the concept of implicit return in arrow functions.
Exercise: There's a function getMovieTitles which returns an array of all movie
titles. Convert this function into a single-line arrow function using the implicit return
feature.
Initial Code:
function getMovieTitles(movies) {
 return movies.map(function(movie) {
 return movie.title;
 });
}
*/
const getMovieTitles = movies =>movies.map(movie => movie.title);
//-----------------------------------------------------------------------------
console.log('ARRAY METHODS:');
//-----------------------------------------------------------------------------
/*
1. Display Movie Titles
Input: An array of movie objects.
Task: Return a new array that contains only the titles of each movie.
Example: Given the input data from above, the function should return: ["The
Shawshank Redemption", "The Godfather", "The Godfather: Part II", "The Dark
Knight", "12 Angry Men"]
*/
const getMovieTitles1 = (movies) =>{
  return movies.map(movie => movie.title )
}
const moviess = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

const movieTitles = getMovieTitles1(moviess);
console.log(movieTitles);

//-----------------------------------------------------------------------------
/*
const movies = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

2. Highly Rated Movies
Input: An array of movie objects, a minimum rating value.
Task: Return a new array containing only movies with a rating equal to or greater than
the provided value.
Example: Given the input data and a rating of 9.1, the function should return an array
containing only the objects for "The Shawshank Redemption" and "The Godfather".
*/
const highlyRatedMovies = (movies, rate) => {
  const filteredMovies = movies.filter(movie => movie.rating >= rate);
  return filteredMovies;
};

const movieTitleAndRate = [
  { title: "The Shawshank Redemption", rating: 9.3 },
  { title: "The Godfather", rating: 9.2 },
  { title: "The Godfather: Part II", rating: 9.0 },
  { title: "The Dark Knight", rating: 9.0 },
  { title: "12 Angry Men", rating: 9.0 }
];

const highRatedMovies = highlyRatedMovies(movieTitleAndRate, 9.1);
console.log(highRatedMovies);

//-----------------------------------------------------------------------------
/*
const movies = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

3. Total Votes Count
Input: An array of movie objects.
Task: Return the total count of votes across all movies.
Example: Given the input data, the function should return: 7912782
*/
function getTotalVotesCount(movies) {
  return movies.reduce((totalVotes, movie) => totalVotes + movie.votes, 0);
}
const movies1 = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];
const totalVotesCount = getTotalVotesCount(movies1);
console.log(totalVotesCount); // Output: 7912782

//-----------------------------------------------------------------------------
/*
const movies = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

4. Combine Movie Titles and Ratings
Input: An array of movie objects.
Task: Return a new array with strings combining the movie title and its rating. Each
string should be formatted as "{title} - {rating}".
Example: Given the input data, the first item in the returned array should be: "The
Shawshank Redemption - 9.3"
*/
function getTitleWithRating(movies) {
  return movies2.map(movie => `${movie.title} - ${movie.rating}`);
}
const movies2 = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];
const titleWithRatingArray = getTitleWithRating(movies);
console.log(titleWithRatingArray);

//-----------------------------------------------------------------------------
/*
const movies = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];
5. Update Movie Ratings
Input: An array of movie objects, a new rating, and a movie title.
Task: Update the rating of the specified movie in the array and return the updated
array.
Example: Given the input data, a rating of 9.5, and the title "The Shawshank
Redemption", the updated rating of "The Shawshank Redemption" in the returned
array should be 9.5.
*/
function updateMovieRating(movies3, title, newRating) {
  return movies3.map(movie => {
    if (movie.title === title) {
      return { ...movie, rating: newRating };
    }
    return movie;
  });
}
const movies3 = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

const updatedMovies = updateMovieRating(movies, "The Shawshank Redemption", 9.5);
console.log(updatedMovies);


//-----------------------------------------------------------------------------
/*
const movies = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

6. Genre Filter
Input: An array of movie objects, a genre string.
Task: Return a new array containing only movies of the specified genre.
Example: Given the input data and the genre "Drama", the function should return an
array with movies that have "Drama" in their genre.
*/
function getMoviesByGenre(movies4, genre) {
  return movies4.filter(movie => movie.genre.includes(genre));
}
const movies4 = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

const dramaMovies = getMoviesByGenre(movies4, "Drama");
console.log(dramaMovies);

//-----------------------------------------------------------------------------
/*
const movies = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

7. Yearly Movie Filter
Input: An array of movie objects, a year.
Task: Return a new array containing only movies that were released after the
specified year.
Example: Given the input data and the year 2000, the function should return an array
with only "The Dark Knight".
*/
function getMoviesReleasedAfterYear(movies5, year) {
  return movies5.filter(movie => movie.year > year);
}
const movies5 = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

const moviesReleasedAfter2000 = getMoviesReleasedAfterYear(movies5, 2000);
console.log(moviesReleasedAfter2000);

//-----------------------------------------------------------------------------
/*
const movies = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

8. Average Movie Rating
Input: An array of movie objects.
Task: Calculate and return the average movie rating.
Example: Given the input data, the function should return approximately 9.1.

*/
function calculateAverageRating(movies6) {
  const totalRatings = movies6.reduce((total, movie) => total + movie.rating, 0);
  const averageRating = totalRatings / movies6.length;
  return averageRating.toFixed(1);
}
const movies6 = [
  { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
  { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
  { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
  { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
  { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
];

const averageRating = calculateAverageRating(movies6);
console.log(averageRating); // Output: "9.1"

//-----------------------------------------------------------------------------