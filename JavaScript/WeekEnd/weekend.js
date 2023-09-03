
let arrayOfTasks = []


//1.
function addTaskToArray ( description , status ){
    let addTaskObject = {
        description : description,
        status:status   };

    arrayOfTasks.push(addTaskObject)
}
addTaskToArray( "ali " , 90);
console.log(arrayOfTasks[0].description);



//2.
function displayTasks (display){
    for (const display of addTaskToArray){
        console.log(display[0])
    }
}
displayTasks();



//3.
function removeTasks (remove){
addTaskToArray.pop(remove);


}


