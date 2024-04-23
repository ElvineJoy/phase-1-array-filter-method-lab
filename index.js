// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching (drivers, string) {
    return drivers.filter((driverMatch) => driverMatch.toLowerCase() === string.toLowerCase());
};

// function fuzzy match

function fuzzyMatch (drivers, enteredString) {
    return drivers.filter((driverMatch) => driverMatch.toLowerCase().indexOf(enteredString.toLowerCase())=== 0);
};

// function matchName

function matchName (drivers, thirdString) {
    return drivers.filter((driverMatch) => driverMatch.name === thirdString )
}