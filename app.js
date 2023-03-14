let hours = [" 6am ", " 7am ", " 8am ", " 9am ", " 10am ", " 11am ", " 12pm ", " 1pm ", " 2pm ", " 3pm ", " 4pm ", " 5pm ", " 6pm ", " 7pm "];

function getTableHeader() {
    let headersTr = document.createElement("tr");
    let blankTd = document.createElement("td");
    headersTr.appendChild(blankTd);

    for (let i = 0; i < hours.length; i++) {
        let tableTh = document.createElement("th");
        tableTh.innerHTML = hours[i];
        headersTr.appendChild(tableTh);
    }

    let totalTh = document.createElement("th")
    totalTh.innerHTML = "Daily Totals";
    headersTr.appendChild(totalTh);
    document.getElementById("body").append(headersTr)

};

getTableHeader();


function getRandom(min, max) { //generates a random number

    return Math.ceil(Math.random() * (max - min) + min);// math.random generates number b/w 0 and 1

};

var cookieStandLocation = function (min, max, average, location) {
    stand = {};
    stand.min = min;
    stand.max = max;
    stand.average = average;
    stand.location = location;
    stand.hoursOfOperation = hours;
    stand.cookiesPerCustomer = [];

    stand.getCustomers = function () { //fucntion for generating number of customers
        return getRandom(this.max, this.min);
    };

    stand.getCookies = function () { //function for generating cookies sold per hour 
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            const cookiesSold = Math.ceil(this.average * this.getCustomers());
            console.log(this.hoursOfOperation[i], cookiesSold);
            this.cookiesPerCustomer.push(cookiesSold);
        };
        return this.cookiesPerCustomer;
    };

    stand.totalDailyCookies = function () { //this function totals the amount of cookies per store location
        let totalCookiesSold = 0;
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            totalCookiesSold += this.getCookies()[i];
        }
        return totalCookiesSold;
    };

    stand.render = function () { //this function renders the table that displays information for each city 
        //row for the location data
        let tableTr = document.createElement("tr");
        let localTd = document.createElement("td");
        localTd.innerHTML = this.location;
        tableTr.append(localTd);

        for (let i = 0; i < this.hoursOfOperation.length; i++) { //this for loop loops creates eleents in the table and pushes information through to display in the table
            let tableTd = document.createElement("td");
            tableTd.innerHTML = this.cookiesPerCustomer[i];
            console.log(this.cookiesPerCustomer);
            tableTr.append(tableTd);
        }

        let totalTd = document.createElement("td");
        totalTd.innerHTML = this.totalDailyCookies();
        tableTr.append(totalTd);

        document.getElementById("body").append(tableTr);
    };
    return stand;
}


const seattle = cookieStandLocation(23, 65, 6.3, "Seattle", []);
seattle.getCookies();
seattle.getCustomers();
seattle.render();
seattle.cookiesPerCustomer[0];

const tokyo = new cookieStandLocation(3, 24, 1.2, "Tokyo", []);
tokyo.getCookies();
tokyo.getCustomers();
tokyo.render();
tokyo.cookiesPerCustomer[0];

const dubai = new cookieStandLocation(11, 38, 3.7, "Dubai", []);
dubai.getCookies();
dubai.getCustomers();
dubai.render();
dubai.cookiesPerCustomer[0];

const paris = new cookieStandLocation(20, 38, 2.3, "Paris", []);
paris.getCookies();
paris.getCustomers();
paris.render();

const lima = new cookieStandLocation(2, 16, 4.6, "Lima", []);
lima.getCookies();
lima.getCustomers();
lima.render();



getHourlyTotal = function () { //loops through hr of opp and add up cookies sold at that hr; accross all stores

    let totalHourlyLoc = document.createElement("tfoot");
    let hoursArray = [];

    //insert before allows me to insert a new cell for data, in this case a totals header for the totals row. 
    let totalHourlySales = document.createElement("td")
    totalHourlySales.innerHTML = "Totals";
    totalHourlyLoc.insertBefore(totalHourlySales, totalHourlyLoc.firstChild);

    for (let i = 0; i < hours.length; i++) {
        let cookiesSoldHr = seattle.cookiesPerCustomer[i] + lima.cookiesPerCustomer[i] + dubai.cookiesPerCustomer[i] + paris.cookiesPerCustomer[i] + tokyo.cookiesPerCustomer[i]
        hoursArray.push(cookiesSoldHr);
        let lasttr = document.createElement("td");
        lasttr.innerHTML = cookiesSoldHr;
        totalHourlyLoc.append(lasttr);
    }

    document.getElementById("body").append(totalHourlyLoc);

    console.log(hoursArray);
    return hoursArray;


};

getHourlyTotal();




let submit = function (e) {
    e.preventDefault()
    let userInput = document.getElementById("location")
    let userInputValue = userInput.value
    //console.log(userInputValue, "this is the user input")
    let userNewLocation = cookieStandLocation(3, 10, 5, userInputValue)
    //console.log(userNewLocation, "this is the new location")
    userNewLocation.getCookies();
    userNewLocation.getCustomers();
    userNewLocation.render();


}
let submitButton = document.getElementById("newLocation");
submitButton.addEventListener("click", submit);


