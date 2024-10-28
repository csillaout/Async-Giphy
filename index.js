require('dotenv').config();

// Print out value of API key stored in .env file
async function getImage(query) {
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    let parsed = await response.json();
    return parsed.data[0].url;
}

getImage("dog").then(function(result) {
    console.log(result);
})