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
/*let hoursOfOperation1=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
let hoursArray = document.querySelector("output")
let variable = document.createElement("li");
for(let i = 0; i < hoursOfOperation1.length; i++){
   // variable.innerHTML = `${hoursOfOperation1[i]}: ${cookiesPerCustomer[i]} cookies`;
    hoursArray.append(variable);
}*/

function getRandom(min, max) { //generates a random number

    return Math.ceil(Math.random() * (max - min) + min);// math.random generates number b/w 0 and 1

}
//SEATTLE
const seattle = {
    min: 23, //minmum customer
    max: 65, //maximum customer
    average: 6.3, //average cookie per customer
    hoursOfOperation4: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerCustomer: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursOfOperation4.length; i++) {
            console.log(seattle.hoursOfOperation4[i], Math.ceil(this.average *this.customersPerHour()));
            //console.log(Math.ceil(this.average *this.customersPerHour()));
            this.cookiesPerCustomer.push(Math.ceil(this.average *this.customersPerHour())); //
        }
        return this.cookiesPerCustomer;


    }

}
seattle.getCookies();
let hoursOfOperation4 = document.querySelector(".seattleOutput");

for(let i = 0; i < seattle.hoursOfOperation4.length; i++){
    let list = document.createElement("li");
   list.innerHTML = `${seattle.hoursOfOperation4[i]}: ${seattle.cookiesPerCustomer[i]} cookies`;
    hoursOfOperation4.append(list);
}

//TOKYO
const tokyo = {
    min: 3, //minmum customer
    max: 24, //maximum customer
    average: 1.2, //average cookie per customer
    hoursOfOperation3: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerCustomer: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursOfOperation3.length; i++) {
            console.log(tokyo.hoursOfOperation3[i], Math.ceil(this.average *this.customersPerHour()));
            //console.log(Math.ceil(this.average *this.customersPerHour()));
            this.cookiesPerCustomer.push(Math.ceil(this.average *this.customersPerHour())); //
        }
        return this.cookiesPerCustomer;


    }

}
tokyo.getCookies();
let hoursOfOperation3 = document.querySelector(".tokyoOutput");

for(let i = 0; i < tokyo.hoursOfOperation3.length; i++){
    let list = document.createElement("li");
   list.innerHTML = `${tokyo.hoursOfOperation3[i]}: ${tokyo.cookiesPerCustomer[i]} cookies`;
    hoursOfOperation3.append(list);
}

//DUBAI
const dubai = {
    min: 11, //minmum customer
    max: 38, //maximum customer
    average: 3.7, //average cookie per customer
    hoursOfOperation2: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerCustomer: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursOfOperation2.length; i++) {
            console.log(dubai.hoursOfOperation2[i], Math.ceil(this.average *this.customersPerHour()));
            //console.log(Math.ceil(this.average *this.customersPerHour()));
            this.cookiesPerCustomer.push(Math.ceil(this.average *this.customersPerHour())); //
        }
        return this.cookiesPerCustomer;


    }

}
dubai.getCookies();
let hoursOfOperation2 = document.querySelector(".dubaiOutput");

for(let i = 0; i < dubai.hoursOfOperation2.length; i++){
    let list = document.createElement("li");
   list.innerHTML = `${dubai.hoursOfOperation2[i]}: ${dubai.cookiesPerCustomer[i]} cookies`;
    hoursOfOperation2.append(list);
}




//PARIS
const paris = {
    min: 20, //minmum customer
    max: 38, //maximum customer
    average: 2.3, //average cookie per customer
    hoursOfOperation1: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerCustomer: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursOfOperation1.length; i++) {
            console.log(paris.hoursOfOperation1[i], Math.ceil(this.average *this.customersPerHour()));
            //console.log(Math.ceil(this.average *this.customersPerHour()));
            this.cookiesPerCustomer.push(Math.ceil(this.average *this.customersPerHour())); //
        }
        return this.cookiesPerCustomer;


    }

}
paris.getCookies();
let hoursOfOperation1 = document.querySelector(".parisOutput");

for(let i = 0; i < paris.hoursOfOperation1.length; i++){
    let list = document.createElement("li");
   list.innerHTML = `${paris.hoursOfOperation1[i]}: ${paris.cookiesPerCustomer[i]} cookies`;
    hoursOfOperation1.append(list);

}


//LIMA
const lima = {
    min: 2, //minmum customer
    max: 16, //maximum customer
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    average: 4.6, //average cookie per customer
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    totalCookies: 0,
    cookiesPerCustomer: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log(lima.hoursOfOperation[i], Math.ceil(this.average *this.customersPerHour()));
            //console.log(Math.ceil(this.average *this.customersPerHour()));
            this.cookiesPerCustomer.push(Math.ceil(this.average *this.customersPerHour())); 
            
        }
        return this.cookiesPerCustomer;


    }

}
lima.getCookies();
let hoursOfOperation = document.querySelector(".limaOutput");
let totalCookies = document.querySelector(".totalCookies");

for(let i = 0; i < lima.hoursOfOperation.length; i++){
    let list = document.createElement("li");
   list.innerHTML = `${lima.hoursOfOperation[i]}: ${lima.cookiesPerCustomer[i]} cookies`;
    hoursOfOperation.append(list);
    totalCookies.innerHTML = `Total Cookies: ${lima.totalCookies}`;
}
//Total cookies






// for(let i = 0; i < lima.hoursOfOperation.length; i++){
//     console.log(lima.hoursOfOperation[i]);
//     console.log(lima.cookiesPerCustomer[i]);
// }
// console.log(lima.hoursOfOperation);
// console.log(lima.getCookies());



//console.log(lima.getCustomers());





// find number of cookies * avg cookies to number of ppl

/*function getTotalcookie(average){
    average * getCustomers();
}
getTotalcookie();*/

