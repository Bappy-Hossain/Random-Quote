const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const button = document.querySelector("#button");

const urlAPI = "https://api.api-ninjas.com/v1/quotes?happiness";
const keyAPI = "ysr2zb3FHvPo0dWH5Q5dXg==SX8ya2FN1NJVitQg";

const getQuote = () => {
  fetch(urlAPI, {
    headers: {
      "X-Api-Key": keyAPI,
    },
  })
    .then((data) => data.json())
    .then((item) => {
      quoteElement.textContent = item[0].quote;
      authorElement.textContent = item[0].author;
    })
    .catch((error) => {
      console.error("Error Fetching Quotes", error);
    });
};
getQuote();

button.addEventListener("click", getQuote);
