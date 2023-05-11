const workers = [
    {name: 'Mark', salary: 500}, {name: 'Michael', salary: 1800},
    {name: 'Elvin', salary: 300}, {name: 'John', salary: 800},
    {name: 'Rihanna', salary: 1500}, {name: 'Garry', salary: 1100},
    {name: 'Tom', salary: 1300}, {name: 'Miriam', salary: 900},
];
// вывести список с теми, у кого больше 1000
const getWorthyWorkers = workersArr => {
    const moreThan = [];

    // this is second way
    workersArr.forEach(currentWorker => {
        if (currentWorker.salary > 1000) {
            moreThan.push(currentWorker.name)
        }
    })
    return moreThan;


    //  this is first way:
    for (let every=0; every < workersArr.length; every++) {
        const currentWorker = workersArr[every];

        if (currentWorker.salary > 1000) {
            moreThan.push(currentWorker.name);
        }
    }
    return moreThan;
        
};

console.log(getWorthyWorkers(workers))