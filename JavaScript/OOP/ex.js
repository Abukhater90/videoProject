




class media {
constructor ( title , duration )
 {
    this.title = title;
    this.duration = duration ;
    this.ratings = [];

   addRating (rating ) 
     { this.ratings.push(this.ratings) ; } ;

  calculateAverageRating ()
     {

            if (this.ratings.length === 0 )
            {
                return " 'No ratings yet'"
            } ; 
           const sumOfRatings = this.ratings.reduce
           (  (acc , element )=>  acc + element , 0 );
           const avgRatings = sumOfRatings / this.ratings.length ;

     };




    displayDetails (title , duration ,  average)
    {

return  ` ${ title}` }
    console.log ( displayDetails ("ahmad" ) )}; }



 

//2.1 + 2.2

class movie extends media 
{
    constructor (title, duration, director, genre )
    {
        super ( title , duration  )
        this.director = director ;
        this.genre = genre ;
    }


        displayDetails (director , genre )
    {
        return `${super.displayDetails()}, Director: ${this.director}, Genre: ${this.genre}`;
    }
}


//2.2 + 2.4


class series extends media
{
constructor (title, duration, seasons )
{     
    super (title , duration )
  return `  ${super.displayDetails()}  , Seasons : ${  this.seasons }  `  ;
}
}



///////////////////////////////////



//3.1


class user 
{

    constructor ( userName)

    {


        new 


    }

    



}
