
"use strict";
// Declares a constant variable container
const container = document.getElementById("container");

// Declares a constant variable hours
const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Declares a random number function
function randomNum(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}

// Creates an object 'Seattle with key value pairs properties
const seattle = {
    storename: 'seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerHour: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
  
// Calculates the number of customers every hour with a for loop function
    calcCustomersEachHour: function () {
      for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
      }
//      console.log(this.customersEachHour);
    },

// Calculates the number of cookies sold each hour with a for loop function
    calcCookiesEachHour: function () {
      for (let i = 0; i < hours.length; i++) {
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
      }
    },
  
    render: function () {
      const article = document.createElement("article");
      const h3 = document.createElement("h3");
      h3.textContent = this.storename;
      article.appendChild(h3);
      const ul = document.createElement("ul");
      for (let i = 0; i < hours.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies | ${this.customersEachHour[i]} customers`;
        ul.appendChild(li);
      }
      article.appendChild(ul);
      container.appendChild(article);
    }
  };
  
  seattle.calcCustomersEachHour();
  seattle.calcCookiesEachHour();
  seattle.render();