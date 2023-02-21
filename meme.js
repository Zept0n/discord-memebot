const fetch = require('node-fetch');

exports.getMeme = async function () {
  const data=await fetch('https://meme-api.com/gimme')
  const meme=await data.json();
  return meme;
};