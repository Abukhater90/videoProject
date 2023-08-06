//1. Add a New Rating
function addRating(rating) {
    this.ratings.push(rating);
    }
   let movieObject ={title: 'Inception', ratings: [8, 9, 10]} ;
   let ratingObject= {user: 'John Doe', rating: 8};
   addRating.call(movieObject,ratingObject.rating);
   console.log(movieObject)
//2. Calculate Average Rating
function calculateAverageRating() {
    let sum = this.ratings.reduce((a, b) => a + b, 0);
    return sum / this.ratings.length;
    }
   
movieObject= {title: 'Inception', ratings: [8, 9, 10, 8]};
console.log(calculateAverageRating.call(movieObject));

//3. Bind a User to a Rating Method
function addRatingUser(rating) {
    this.ratings.push(rating);
    }
let UserObject ={name: 'John Doe',ratings:[]}
const Bound=addRatingUser.bind(UserObject)

console.log('Bound function:', Bound);