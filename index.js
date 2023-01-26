const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, driversName) {
    return drivers.filter(
        (member) => member.toLowerCase() === driversName.toLowerCase()
    )
}
function fuzzyMatch(drivers, driversName) {
    let partialMatch = drivers.filter(
        (member) => member.substr(0, 2) === driversName
    );
    return partialMatch
}

const filtered = drivers.filter(function (value) {
    return value === drivers
});
console.log(filtered)

const driversTwo = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];
function matchName(driversTwo, driversName) {
    return driversTwo.filter((member) => member.name === driversName)
}
matchName(driversTwo)