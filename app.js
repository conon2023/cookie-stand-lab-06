"use strict";

const container = document.getElementById("container");
const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
  storename: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerHour: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
    }
  },

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

const tokyo = {
  storename: 'tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerHour: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
    }
  },

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

tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();

const dubai = {
  storename: 'dubai',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerHour: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
    }
  },

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

dubai.calcCustomersEachHour();
dubai.calcCookiesEachHour();

const paris = {
  storename: 'paris',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerHour: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
    }
  },

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

paris.calcCustomersEachHour();
paris.calcCookiesEachHour();


const lima = {
  storename: 'lima',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerHour: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
    }
  },

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

lima.calcCustomersEachHour();
lima.calcCookiesEachHour();




seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
