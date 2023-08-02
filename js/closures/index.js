
const  createTravelPlanner = () => {
 let travelPlaner=[];
    const addDestination = (dsetinationName) =>{
        travelPlaner.push(dsetinationName);
        console.log(`${dsetinationName} added to the travel planner.`)

}
 const removeDestination = (dsetinationName) =>{
    const index=travelPlaner.indexOf(dsetinationName);
    if (index !== -1) {
        travelPlaner.splice(index, 1);
        console.log(`${dsetinationName} removed from the travel planner.`);
    } else {
        console.log(`${dsetinationName} is not in the travel planner.`);
    }
 }

   const getDestinations =() => {
           return travelPlaner;
    }
return {
    addDestination,
    removeDestination,
    getDestinations
       };

}

/*// Using createTravelPlanner function
let myTravelPlanner = createTravelPlanner();

// Adding destinations
myTravelPlanner.addDestination("Paris");
// Output: "Paris added to the travel planner."
myTravelPlanner.addDestination("London");
// Output: "London added to the travel planner."

// Removing a destination
myTravelPlanner.removeDestination("Paris");
// Output: "Paris removed from the travel planner."

// Attempting to remove a non-existing destination
myTravelPlanner.removeDestination("Rome");
// Output: "Rome is not in the travel planner."
// Getting the list of destinations
console.log(myTravelPlanner.getDestinations());
// Output: ["London"]*/

const createTravelPlannerWithDetails = () => {
    let travelPlaner=[];

    const addDestinationWithDetails = (destinationName, destinationDetails) => {
    let newObject={Destination:destinationName, Details:destinationDetails}
     travelPlaner.push(newObject);
     console.log(`${destinationName} added to the travel planner with details.` );
    }

    const removeDestination =(destinationName) => {
       
        const index=travelPlaner.indexOf(destinationName);
        if (index !== -1) {
            travelPlaner.splice(index, 1);
            console.log(`${destinationName} removed from the travel planner.`);
        } else {
            console.log(`${destinationName} is not in the travel planner.`);
        }}

    const getDestinationsWithDetails = () =>{
        return travelPlaner;
    }
    const sortDestinations = () => {
        travelPlaner.sort((travel,travel2) => {
            const des1 = travel.Destination.toUpperCase(); 
            const des2 = travel2.Destination.toUpperCase(); 

            if (des1 < des2) {
              return -1; //travel should come before travel2 in the sorted array.
            }
            if (des1 >des2) {
              return 1; //travel should come after travel2 in the sorted array.
            }
        return 0;})
        console.log(travelPlaner)
    }
    const searchDestination =(destinationName) =>{
        const travelSearch=travelPlaner.find(travelPlaner=> travelPlaner.Destination === destinationName)

        if(travelSearch){
            console.log(travelSearch)
        }
        else {
            console.log(`${destinationName} is not in the travel planner.`)
        }

    }
    return {
        addDestinationWithDetails,
        removeDestination,
        getDestinationsWithDetails,
        sortDestinations,
        searchDestination
    };

} 

let myDetailedTravelPlanner = createTravelPlannerWithDetails();

// Adding destinations with details
myDetailedTravelPlanner.addDestinationWithDetails("Paris", { attractions: ["Eiffel Tower", "Louvre Museum"] });
// Output: "Paris added to the travel planner with details."
myDetailedTravelPlanner.addDestinationWithDetails("aLondon", { attractions: ["London Eye", "British Museum"] });
// Output: "London added to the travel planner with details."
// Removing a destination
myDetailedTravelPlanner.removeDestination("Paris");
// Output: "Paris removed from the travel planner."

// Attempting to remove a non-existing destination
myDetailedTravelPlanner.removeDestination("Rome");
// Getting the list of destinations with details
console.log(myDetailedTravelPlanner.getDestinationsWithDetails());
// Output: [{ destination: "London", details: { attractions: ["London Eye", "British Museum"] }}]
myDetailedTravelPlanner.sortDestinations();
myDetailedTravelPlanner.searchDestination("Paris");
myDetailedTravelPlanner.searchDestination("Italy");

