//require("dotenv").config();
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=M1Sc5YaIqGuJ9QWS3GUtYMvYY6HnLYuY&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

// Print out value of API key stored in .env file
//console.log(process.env.API_KEY);

async function getImage(query) {
  const response = await fetch(endpoint);
  const parsed = await response.json();
  return parsed.data[0].url;
}
getImage("dog").then(function (result) {
  console.log(result);
});
