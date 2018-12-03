// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2

var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n ===================================================\nEmployee Number, First Name, Last Name, Sales Units\n***************************************************\n\n1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4\n5, Charles Emmerson III, Winchester, 2\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, 12\n8, Dale, Dalesinger, 1\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";

var reportArray = [];
reportContents.split('\n').forEach(function(content) {
    reportArray.push(content.split(','));
});
console.log(reportArray);

var employeeStat = reportArray.slice(7);
console.log(employeeStat);


// - total number of employees
var numberOfEmployees = employeeStat.length + 1;
document.getElementById("numOfEmployees").innerHTML = 'There are ' + (numberOfEmployees) + ' employees working at Codeup.';

// - total number of units sold
var unitsSold = [];
employeeStat.forEach(function (element, index) {
    unitsSold.push(Number(employeeStat[index][3]));
});
console.log(unitsSold);

/*  Converts array of strings to numbers
array.map(function(v) {
    return parseInt(v, 10);
});
*/

function sumAll (array) {
    return array.reduce(function(a,b){
        return a+b
    });
}
var sumUnitsSold = sumAll(unitsSold);
document.getElementById("unitSoldSum").innerHTML = 'The total number of units sold: ' + sumUnitsSold;


// - avg units sold per employee
document.getElementById("unitSoldAvg").innerHTML = 'The average units sold: ' + (sumUnitsSold / numberOfEmployees).toFixed(2);


// - Then output should share employee production, ordered from highest to lowest # of units
function Comparator(a, b) {
    if (Number(a[3]) > Number(b[3])) return -1;
    if (Number(a[3]) < Number(b[3])) return 1;
    return 0;
}
var sortedEmployeeStat = employeeStat.slice().sort(Comparator);
console.log(sortedEmployeeStat);

var table = document.createElement('table'),
    thead = document.createElement('thead'),
    tbody = document.createElement('tbody'),
    th,
    tr,
    td;
    th = document.createElement('th'),
    th.innerHTML="Units";
    table.appendChild(th);
    th = document.createElement('th');
    th.innerHTML= "Full Name";
    table.appendChild(th);
    th = document.createElement('th');
    th.innerHTML= "Employee Number";
    table.appendChild(th);
    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table);
    for(var i=0;i<sortedEmployeeStat.length;i++){
    tr = document.createElement('tr'),
    //for units
    td= document.createElement('td');
    td.innerHTML=sortedEmployeeStat[i][3];
    tr.appendChild(td);

    //for full name
    td = document.createElement('td');
    td.innerHTML=sortedEmployeeStat[i][1] + ' ' + sortedEmployeeStat[i][2];
    tr.appendChild(td);
    tbody.appendChild(tr);

    //for employee number
    td = document.createElement('td');
    td.innerHTML=sortedEmployeeStat[i][0];
    tr.appendChild(td);
    tbody.appendChild(tr);
    }



// function unitsArray (array) {
//     var unitsSold = [];
//     for (var i = 0; i < array.length; i++) {
//         unitsSold.push(array[i][3]);
//     }
//     return unitsSold;
// }
// var unitsSold = unitsArray(employeeStat);