


const movieDatabase =
 { movies:[],
    addMovie : function (movieTitle, ratings,average) {
        this.movies.push({title: movieTitle, ratings:ratings, averageRating:average}) 

        


    } ,

    removeMovie : function ( title  ){ 
        this.movies = this.movies.filter ((movie) => movie.title !== title ) 
    } ,


    addRating : function (title , rating){
        // console.log({moviesArr:this.movies})
        const movie = this.movies.find((movie)=> movie.title === title )
        if(movie){
            movie.ratings.push(rating)
            console.log(movie)
        }
    } 
    // this.title.include(this.title === titleMovie )}
    
}

movieDatabase.addMovie('fast',[], 0)
// movieDatabase.addMovie('gladiator',[2,1,4], 3)
// {title :"" , ratings :null , averageRating:null }

// console.log(movieDatabase.movies)




// exercise 2 :

movieDatabase.addRating("fast", 6)
// console.log(movieDatabase)













 /*  addRating : function (MovieTitle,rating) {
  //  if (this.movies.title == MovieTitle ){this.movies.ratings.push(rating)}
  const movie = this.movies.find((movie)=> movie.title === MovieTitle)
  console.log(movie)
  if(movie){
    movie.ratings.push(rating)
    const sum = movie.ratings.reduce((acc, ra)=> acc + ra ,0)
    movie.averageRatings = movie.ratings.length > 0 ? sum/movie.ratings.length : 0;
  } 

  */