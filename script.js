/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".


✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
 

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("t1-msg").textContent= "Hello, World!";
})

/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint
button.addEventListener("click", function () {
    // change text here
});
*/
 
document.getElementById("t2-btn").addEventListener("click", function() {
    document.getElementById("t2-status").textContent = "Hey, My Name is Mohamed Kamaleldin";
})

/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/
 
document.getElementById("t3-loadQuote").addEventListener("click", async function() {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (response.ok){
        const data = await response.json();
        document.getElementById("t3-quote").textContent = data.quote;
        document.getElementById("t3-author").textContent = data.author;
    } else {
        console.error("Error fetching quote:", response.status);
    }
});

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/

// import dotenv from 'dotenv';
// dotenv.config();

const key = "bbe6d08a090fdabb0954ef707add212a";
;

document.getElementById("t4-loadWx").addEventListener("click", async function() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=${key}&units=metric`);
    if (response.ok){
        const data = await response.json();
        document.getElementById("t4-temp").textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById("t4-hum").textContent = `Humidity: ${data.main.humidity} %`;
        document.getElementById("t4-wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;
    } else {
        console.error("Error fetching weather data:", response.status);
    }
});



