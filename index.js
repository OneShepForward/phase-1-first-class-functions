//my code goes here
function receivesAFunction(callback) {
    callback();
}

// function aNamedFunction() {
//     console.log('Logged data');
// }

function returnsANamedFunction() {
    //     function aNamedFunction(animal) {
    //         console.log(`Look at ${animal} go!`);
    //     }
    // return aNamedFunction('Nyan Cat');
    function pleaseWork() {
        console.log("Please please please");
    }
    return pleaseWork;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(`Nom nom nom, this kale smoothie is delicious!`);
    }
}