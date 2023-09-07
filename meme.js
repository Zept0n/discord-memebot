const fetch = require('node-fetch');

exports.getMeme = async function (subreddit) {
  let data;
  if (subreddit) {
    subreddit=`/${subreddit}`;
    data=await fetch(`https://meme-api.com/gimme${subreddit}`)
  } else {
    data=await fetch(`https://meme-api.com/gimme`)
  }
  
  const meme=await data.json();
  return meme;
};