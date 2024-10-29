require('dotenv').config();

/**
 * Gets an image from Giphy based on the query
 * @param {String} query 
 * @returns Promise that resolves to an image URL 
 */
async function getImage(query) {
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    // This line will make an API request to Giphy, {process.env.API_KEY} represents the API key for Giphy, and {query} represents the user input. 
    // This returns a promise which is why we await it, when it's done, we get a Respone object <https://developer.mozilla.org/en-US/docs/Web/API/Response>
    let parsed = await response.json();
    // This will return an object representing the data received from the API. This takes a moment, so we have to await it
    return parsed.data[0].url;
    // This sifts through the data and returns what we want, the image URL
    // The returned data from the API is shown below
}
/*
{ // <- This is where the object begins, this is the `parsed` variable`
  data: [ // <- This is an array called `data`
    { // <- This is the first element of the array, the one we're after. It's an array of object
      type: 'gif',
      id: 'Fu3OjBQiCs3s0ZuLY3',
      url: 'https://giphy.com/gifs/moodman-reaction-Fu3OjBQiCs3s0ZuLY3', // This is the main thing we're after, this is the part we can show to the user
      slug: 'moodman-reaction-Fu3OjBQiCs3s0ZuLY3',
      bitly_gif_url: 'https://gph.is/g/4Vn0op1',
      bitly_url: 'https://gph.is/g/4Vn0op1',
      embed_url: 'https://giphy.com/embed/Fu3OjBQiCs3s0ZuLY3',
      username: '',
      source: '',
      title: 'Dog Smile GIF by MOODMAN',
      rating: 'g',
      content_url: '',
      source_tld: '',
      source_post_url: '',
      is_sticker: 0,
      import_datetime: '2020-10-02 02:36:06',
      trending_datetime: '0000-00-00 00:00:00',
      images: [Object],
      analytics_response_payload: 'e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0wMTYyMzlkMzBzb2w4bW5la3h3bGQ4M3NqbGMyeGp6NXluOXEzbTJmamVwaDBlbzUmZ2lmX2lkPUZ1M09qQlFpQ3MzczBadUxZMyZjdD1n',
      analytics: [Object],
      alt_text: 'Video gif. A close-up of a white dog with sprigs of tiny flowers on its head as it appears to smile with squinty eyes and teeth bared. '
    }
  ],
  meta: {
    status: 200,
    msg: 'OK',
    response_id: '0sol8mnekxwld83sjlc2xjz5yn9q3m2fjeph0eo5'
  },
  pagination: { total_count: 500, count: 1, offset: 0 }
}
*/

getImage("dog").then(function(result) {
    // Since getImage is async it returns a promise, we need to wait for it to complete before we print out the URL, else it will just print <Promise>
    console.log(result);
})