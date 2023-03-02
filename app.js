/*Within your javascript file, create separate JS object literals for each shop location. Each location will be responsible for generating sales data and providing output on an html document. You should be able to perform the following tasks in your javascript file:

1. Store the min/max hourly customers, and the average cookies per customer, in object properties.
2. Use a method of that object to generate a random number of customers per hour. Objects/Math/random

3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
4. Store the results for each location in a separate array… perhaps as a property of the object representing that location.
5. Display the values of each array as unordered lists in the browser.
6. Calculating the sum of these hourly totals; your output for each location should look like this:

Seattle

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
Total: 875 cookies*/

function getRandom(min, max) { //generates a random number

    return Math.ceil(Math.random() * (max - min) + min);// math.random generates number b/w 0 and 1

}
//SEATTLE
const seattle = {
    min: 23, //minmum customer
    max: 65, //maximum customer
    average: 6.3, //average cookie per customer
    hoursOfOperation4: ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerCustomer: [],
    getCookies: function () {
        let totalCookiesSold = 0;
        for (let i = 0; i < this.hoursOfOperation4.length; i++) {
            const cookiesSold = Math.ceil(this.average * this.customersPerHour());
            console.log(seattle.hoursOfOperation4[i], Math.ceil(this.average * this.customersPerHour()));
            //console.log(Math.ceil(this.average *this.customersPerHour()));
            this.cookiesPerCustomer.push(cookiesSold); //
            totalCookiesSold += cookiesSold;
        }
        this.totalCookies4 = totalCookiesSold;
        return this.cookiesPerCustomer;


    }

}
seattle.getCookies();
let hoursOfOperation4 = document.querySelector(".seattleOutput");
let totalCookies4 = document.querySelector(".totalCookies4");

for (let i = 0; i < seattle.hoursOfOperation4.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = `${seattle.hoursOfOperation4[i]}: ${seattle.cookiesPerCustomer[i]} cookies`;
    hoursOfOperation4.append(list);
    totalCookies4.innerHTML = `Total: ${seattle.totalCookies4} cookies`;
}

//TOKYO
const tokyo = {
    min: 3, //minmum customer
    max: 24, //maximum customer
    average: 1.2, //average cookie per customer
    hoursOfOperation3: ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerCustomer: [],
    getCookies: function () {
        let totalCookiesSold = 0;
        for (let i = 0; i < this.hoursOfOperation3.length; i++) {
            const cookiesSold = Math.ceil(this.average * this.customersPerHour());
            console.log(tokyo.hoursOfOperation3[i], cookiesSold);
            this.cookiesPerCustomer.push(cookiesSold); //
            totalCookiesSold += cookiesSold
        }
        this.totalCookies3 = totalCookiesSold;
        return this.cookiesPerCustomer;
    }

}
tokyo.getCookies();
let hoursOfOperation3 = document.querySelector(".tokyoOutput");
let totalCookies3 = document.querySelector(".totalCookies3");

for (let i = 0; i < tokyo.hoursOfOperation3.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = `${tokyo.hoursOfOperation3[i]}: ${tokyo.cookiesPerCustomer[i]} cookies`;
    hoursOfOperation3.append(list);
    totalCookies3.innerHTML = `Total: ${tokyo.totalCookies3} cookies`;
}

//DUBAI
const dubai = {
    min: 11, //minmum customer
    max: 38, //maximum customer
    average: 3.7, //average cookie per customer
    hoursOfOperation2: ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerCustomer: [],
    getCookies: function () {
        let totalCookiesSold = 0;
        for (let i = 0; i < this.hoursOfOperation2.length; i++) {
            const cookiesSold = Math.ceil(this.average * this.customersPerHour());

            console.log(dubai.hoursOfOperation2[i], cookiesSold);
            //console.log(Math.ceil(this.average *this.customersPerHour()));
            this.cookiesPerCustomer.push(cookiesSold); 
            totalCookiesSold += cookiesSold;
        }
        this.totalCookies2 = totalCookiesSold;
        return this.cookiesPerCustomer;


    }

}
dubai.getCookies();
let hoursOfOperation2 = document.querySelector(".dubaiOutput");
let totalCookies2 = document.querySelector(".totalCookies2");

for (let i = 0; i < dubai.hoursOfOperation2.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = `${dubai.hoursOfOperation2[i]}: ${dubai.cookiesPerCustomer[i]} cookies`;
    hoursOfOperation2.append(list);
    totalCookies2.innerHTML = `Total: ${dubai.totalCookies2} cookies`;
}




//PARIS
const paris = {
    min: 20, //minmum customer
    max: 38, //maximum customer
    average: 2.3, //average cookie per customer
    hoursOfOperation1: ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerCustomer: [],
    getCookies: function () {
        let totalCookiesSold = 0;
        for (let i = 0; i < this.hoursOfOperation1.length; i++) {
            const cookiesSold = Math.ceil(this.average * this.customersPerHour());
            console.log(paris.hoursOfOperation1[i], cookiesSold);
            this.cookiesPerCustomer.push(cookiesSold);
            totalCookiesSold += cookiesSold;
        }
        this.totalCookies1 = totalCookiesSold; //totalcookies1 refers to class in html
        return this.cookiesPerCustomer;
    }
}

paris.getCookies();
let hoursOfOperation1 = document.querySelector(".parisOutput");
let totalCookies1 = document.querySelector(".totalCookies1");


for (let i = 0; i < paris.hoursOfOperation1.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = `${paris.hoursOfOperation1[i]}: ${paris.cookiesPerCustomer[i]} cookies`;
    hoursOfOperation1.append(list);
    totalCookies1.innerHTML = `Total: ${paris.totalCookies1} cookies`;

}


//LIMA
const lima = {
    min: 2, //minmum customer
    max: 16, //maximum customer
    hoursOfOperation: ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm"],
    average: 4.6, //average cookie per customer
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerCustomer: [],
    getCookies: function () {
        let totalCookiesSold = 0;
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            const cookiesSold = Math.ceil(this.average * this.customersPerHour());
            console.log(lima.hoursOfOperation[i], cookiesSold);
            this.cookiesPerCustomer.push(cookiesSold);
            totalCookiesSold += cookiesSold;
        }
        this.totalCookies = totalCookiesSold;
        return this.cookiesPerCustomer;
    }
}
lima.getCookies();

let hoursOfOperation = document.querySelector(".limaOutput");
let totalCookies = document.querySelector(".totalCookies");

for (let i = 0; i < lima.hoursOfOperation.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = `${lima.hoursOfOperation[i]}: ${lima.cookiesPerCustomer[i]} cookies`;
    hoursOfOperation.append(list);
    totalCookies.innerHTML = `Total: ${lima.totalCookies} cookies`;
}








